export type TechBubble = {
  x: number;
  y: number;
  width: number;
  height: number;
  vx: number;
  vy: number;
};

export type BubbleBounds = { width: number; height: number; padding: number };

const MAX_SPEED = 26;
const COLLISION_GAP = 6;

function containBubble(bubble: TechBubble, bounds: BubbleBounds) {
  const right = Math.max(bounds.padding, bounds.width - bounds.padding - bubble.width);
  const bottom = Math.max(bounds.padding, bounds.height - bounds.padding - bubble.height);

  if (bubble.x < bounds.padding || bubble.x > right) {
    bubble.x = Math.max(bounds.padding, Math.min(right, bubble.x));
    bubble.vx = bubble.x === bounds.padding ? Math.abs(bubble.vx) : -Math.abs(bubble.vx);
  }
  if (bubble.y < bounds.padding || bubble.y > bottom) {
    bubble.y = Math.max(bounds.padding, Math.min(bottom, bubble.y));
    bubble.vy = bubble.y === bounds.padding ? Math.abs(bubble.vy) : -Math.abs(bubble.vy);
  }
}

function resolveCollision(first: TechBubble, second: TechBubble) {
  const dx = second.x + second.width / 2 - first.x - first.width / 2;
  const dy = second.y + second.height / 2 - first.y - first.height / 2;
  const overlapX = (first.width + second.width) / 2 + COLLISION_GAP - Math.abs(dx);
  const overlapY = (first.height + second.height) / 2 + COLLISION_GAP - Math.abs(dy);
  if (overlapX <= 0 || overlapY <= 0) return;

  // Rectangular collision envelopes keep even the longest pill labels apart.
  const horizontal = overlapX < overlapY;
  const direction = (horizontal ? dx : dy) < 0 ? -1 : 1;
  const position = horizontal ? "x" : "y";
  const velocity = horizontal ? "vx" : "vy";
  const separation = ((horizontal ? overlapX : overlapY) + 0.1) / 2;
  first[position] -= separation * direction;
  second[position] += separation * direction;

  const closingSpeed = (second[velocity] - first[velocity]) * direction;
  if (closingSpeed >= 0) return;
  const impulse = -closingSpeed * 0.85;
  first[velocity] -= impulse * direction;
  second[velocity] += impulse * direction;
}

/** Advance in place; the UI owns rendering and the animation lifecycle. */
export function advanceTechBubbles(
  bubbles: TechBubble[],
  bounds: BubbleBounds,
  elapsedSeconds: number,
  random: () => number = Math.random,
) {
  const dt = Math.max(0, Math.min(elapsedSeconds, 0.032));
  for (const bubble of bubbles) {
    bubble.vx += (random() - 0.5) * 18 * dt;
    bubble.vy += (random() - 0.5) * 18 * dt;
    const speed = Math.hypot(bubble.vx, bubble.vy);
    if (speed > MAX_SPEED) {
      bubble.vx *= MAX_SPEED / speed;
      bubble.vy *= MAX_SPEED / speed;
    }
    bubble.x += bubble.vx * dt;
    bubble.y += bubble.vy * dt;
  }

  // Multiple passes settle simultaneous contacts without visible interpenetration.
  for (let pass = 0; pass < 6; pass++) {
    for (let index = 0; index < bubbles.length; index++) {
      for (let other = index + 1; other < bubbles.length; other++) {
        resolveCollision(bubbles[index], bubbles[other]);
      }
    }
    for (const bubble of bubbles) containBubble(bubble, bounds);
  }
}
