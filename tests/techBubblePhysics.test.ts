import assert from "node:assert/strict";
import test from "node:test";
import { advanceTechBubbles, type TechBubble } from "../src/app/lib/techBubblePhysics";

const bounds = { width: 400, height: 300, padding: 12 };
const noWander = () => 0.5;
const bubble = (overrides: Partial<TechBubble> = {}): TechBubble => ({
  x: 100, y: 100, width: 80, height: 32, vx: 16, vy: 12, ...overrides,
});

test("isolated pills drift at the same pace across frame rates", () => {
  const slow = bubble();
  const fast = bubble();
  for (let i = 0; i < 60; i++) advanceTechBubbles([slow], bounds, 1 / 60, noWander);
  for (let i = 0; i < 120; i++) advanceTechBubbles([fast], bounds, 1 / 120, noWander);
  assert.ok(Math.abs(slow.x - fast.x) < 0.001);
  assert.ok(Math.abs(slow.y - fast.y) < 0.001);
  assert.ok(slow.x > 100 && slow.y > 100);
});

for (const edge of ["left", "right", "top", "bottom"] as const) {
  test(`pills bounce inside the ${edge} edge`, () => {
    const pill = bubble({
      x: edge === "left" ? 12 : edge === "right" ? 308 : 100,
      y: edge === "top" ? 12 : edge === "bottom" ? 256 : 100,
      vx: edge === "left" ? -20 : edge === "right" ? 20 : 0,
      vy: edge === "top" ? -20 : edge === "bottom" ? 20 : 0,
    });
    advanceTechBubbles([pill], bounds, 1 / 60, noWander);
    assert.ok(pill.x >= 12 && pill.x + pill.width <= 388);
    assert.ok(pill.y >= 12 && pill.y + pill.height <= 288);
    if (edge === "left") assert.ok(pill.vx > 0);
    if (edge === "right") assert.ok(pill.vx < 0);
    if (edge === "top") assert.ok(pill.vy > 0);
    if (edge === "bottom") assert.ok(pill.vy < 0);
  });
}

test("head-on contacts separate labels and exchange direction softly", () => {
  const first = bubble({ x: 100, vx: 20, vy: 0 });
  const second = bubble({ x: 183, vx: -20, vy: 0 });
  advanceTechBubbles([first, second], bounds, 1 / 60, noWander);
  assert.ok(first.x + first.width < second.x);
  assert.ok(first.vx < 0 && second.vx > 0);
  assert.ok(Math.abs(first.vx) < 20 && Math.abs(second.vx) < 20);
});

test("vertical contacts separate pills with different label widths", () => {
  const first = bubble({ width: 160, y: 100, vx: 0, vy: 20 });
  const second = bubble({ width: 50, y: 134, vx: 0, vy: -20 });
  advanceTechBubbles([first, second], bounds, 1 / 60, noWander);
  assert.ok(first.y + first.height < second.y);
  assert.ok(first.vy < 0 && second.vy > 0);
});

test("separating contacts do not bounce back into each other", () => {
  const first = bubble({ x: 100, vx: -16, vy: 0 });
  const second = bubble({ x: 183, vx: 16, vy: 0 });
  advanceTechBubbles([first, second], bounds, 0, noWander);
  assert.equal(first.vx, -16);
  assert.equal(second.vx, 16);
  assert.ok(first.x + first.width < second.x);
});

test("coincident starting positions settle without invalid coordinates", () => {
  const pills = [bubble(), bubble()];
  advanceTechBubbles(pills, bounds, 0, noWander);
  assert.ok(pills.every(pill => Object.values(pill).every(Number.isFinite)));
  assert.ok(pills[0].y + pills[0].height < pills[1].y);
});

test("a long frame after tab suspension cannot teleport a pill", () => {
  const pill = bubble();
  advanceTechBubbles([pill], bounds, 60, noWander);
  assert.ok(Math.hypot(pill.x - 100, pill.y - 100) < 1);
});

test("empty fields and zero elapsed time remain valid", () => {
  advanceTechBubbles([], bounds, 1 / 60, noWander);
  const pill = bubble();
  const initial = { ...pill };
  advanceTechBubbles([pill], bounds, -1, noWander);
  assert.deepEqual(pill, initial);
});

test("mixed pills remain bounded and apart through repeated random collisions", () => {
  let seed = 42;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const area = { width: 640, height: 420, padding: 12 };
  const pills = Array.from({ length: 23 }, (_, index) => bubble({
    x: 12 + (index % 5) * 120,
    y: 12 + Math.floor(index / 5) * 80,
    width: 60 + random() * 45,
    vx: (random() - 0.5) * 36,
    vy: (random() - 0.5) * 36,
  }));
  for (let frame = 0; frame < 1800; frame++) {
    advanceTechBubbles(pills, area, 1 / 60, random);
    for (const [index, pill] of pills.entries()) {
      assert.ok(pill.x >= 12 && pill.x + pill.width <= 628.001);
      assert.ok(pill.y >= 12 && pill.y + pill.height <= 408.001);
      assert.ok(Object.values(pill).every(Number.isFinite));
      for (const other of pills.slice(index + 1)) {
        const overlapX = Math.min(pill.x + pill.width, other.x + other.width) - Math.max(pill.x, other.x);
        const overlapY = Math.min(pill.y + pill.height, other.y + other.height) - Math.max(pill.y, other.y);
        assert.ok(overlapX <= 0 || overlapY <= 0, `Labels overlap at frame ${frame}`);
      }
    }
  }
});
