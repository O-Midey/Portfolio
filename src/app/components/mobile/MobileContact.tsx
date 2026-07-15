"use client";
import { useState } from "react";
import { EMAIL, LOCATION, SITE_HANDLE, socialLinks } from "../../data/socials";
import TerminalWindow from "./TerminalWindow";

const inputClass =
  "rounded-md border border-term-fg/15 bg-term-bg px-3.5 py-[13px] font-jet text-[13px] text-term-fg placeholder-term-fg/35 caret-term-accent focus:border-term-accent/60 focus:outline-none";

export default function MobileContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const contactRows = [
    { label: "Email", href: `mailto:${EMAIL}`, external: false },
    ...socialLinks
      .filter((s) => s.id !== "github")
      .map((s) => ({ label: s.label, href: s.href, external: true })),
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const signature = form.name
      ? `\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
      : "";
    const subject = encodeURIComponent("Project inquiry — via portfolio");
    const body = encodeURIComponent(`${form.message}${signature}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="term-dot-grid flex min-h-dvh animate-fade-up flex-col bg-term-bg text-term-fg">
      {/* ── Heading ── */}
      <section className="flex flex-col gap-4 px-5 pt-12">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg/50">
          CONTACT 📬
        </p>
        <h1 className="text-[46px] font-bold leading-[1.02] tracking-[-0.02em]">
          Get in <span className="text-term-muted">Touch.</span>
        </h1>
        <p className="text-base leading-relaxed text-term-fg/60">
          Open to new opportunities and interesting projects ✨
        </p>
      </section>

      {/* ── Social links ── */}
      <section className="flex flex-col px-5 pt-10">
        <p className="pb-1.5 font-jet text-[11px] tracking-[0.3em] text-term-fg/50">
          FIND ME ON 🔍
        </p>
        {contactRows.map((row) => (
          <a
            key={row.label}
            href={row.href}
            target={row.external ? "_blank" : undefined}
            rel={row.external ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between border-b border-term-fg/10 py-[18px] transition-opacity active:opacity-60"
          >
            <span className="text-base font-semibold">{row.label}</span>
            <span className="text-base text-term-accent">→</span>
          </a>
        ))}
      </section>

      {/* ── Message form ── */}
      <section className="flex flex-col gap-4 px-5 pb-2.5 pt-11">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg/50">
          SEND A MESSAGE ✍️
        </p>
        <TerminalWindow title="omotosho@portfolio ~ contact.sh">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3.5 p-4"
          >
            <p className="font-jet text-xs text-term-accent">
              {`// drop me a line — I'll get back to you`}
            </p>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-jet text-[10.5px] tracking-[0.14em] text-term-fg/50"
              >
                NAME
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="jane doe"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-jet text-[10.5px] tracking-[0.14em] text-term-fg/50"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-jet text-[10.5px] tracking-[0.14em] text-term-fg/50"
              >
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="tell me about your project…"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center rounded-full bg-term-fg py-[15px] font-jet text-[12.5px] font-semibold tracking-[0.12em] text-term-bg transition-opacity active:opacity-75"
            >
              $ ./send_message →
            </button>
          </form>
        </TerminalWindow>
      </section>

      {/* ── Footer ── */}
      <footer className="flex justify-between px-5 pb-8 pt-7 font-jet text-[11px] text-term-fg/40">
        <span>
          © {new Date().getFullYear()} {SITE_HANDLE}
        </span>
        <span>{LOCATION}</span>
      </footer>
    </div>
  );
}
