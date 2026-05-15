"use client";
import { useState } from "react";
import { Mail, Twitter, Linkedin, Instagram, Send, ArrowRight, Copy, Check } from "lucide-react";
import AnimatedDiv from "../components/AnimatedDiv";

const EMAIL = "talk2adeoluwa2310@gmail.com";

const socials = [
  { label: "Email", handle: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: "LinkedIn", handle: "omotosho-david", href: "https://linkedin.com/in/omotosho-david", icon: Linkedin },
  { label: "Twitter", handle: "@meeedzy", href: "https://twitter.com/meeedzy", icon: Twitter },
  { label: "Instagram", handle: "@thismidey", href: "https://instagram.com/thismidey", icon: Instagram },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true);
  }

  function copyEmail(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#2a2a2a] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#555] focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-[#666] transition rounded-xl";

  return (
    <section className="relative min-h-screen bg-[#fafafa] dark:bg-[#111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AnimatedDiv>

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-600 dark:text-[#555] uppercase mb-3">contact 📩</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-4">
              Get in<br />
              <span className="text-gray-500 dark:text-[#999]">Touch.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-[#888] font-light max-w-lg leading-relaxed">
              Open to new opportunities and interesting projects ✨
            </p>
          </div>

          {/* Socials */}
          <div className="mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-600 dark:text-[#555] uppercase mb-6">find me on 🔍</p>
            <div className="space-y-1">
              {socials.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3.5 border-b border-gray-200 dark:border-[#2a2a2a] hover:border-gray-400 dark:hover:border-[#444] transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-4 h-4 text-gray-500 dark:text-[#999] group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-600 dark:text-[#999] group-hover:text-gray-900 dark:group-hover:text-[#ccc] transition-colors duration-200">
                      {handle}
                    </span>
                    {label === "Email" ? (
                      <button
                        onClick={copyEmail}
                        className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-200"
                        title={copied ? "Copied!" : "Copy email"}
                      >
                        {copied
                          ? <Check className="w-3.5 h-3.5 text-emerald-500" />
                          : <Copy className="w-3.5 h-3.5 text-gray-500 dark:text-[#666]" />}
                      </button>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-[#ccc] group-hover:translate-x-0.5 transition-all duration-200" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-600 dark:text-[#555] uppercase mb-6">send a message ✍️</p>
            {sent ? (
              <p className="text-sm text-green-600 font-medium py-4">
                ✅ Opening your email client — thanks for reaching out!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-600 dark:text-[#999] uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-600 dark:text-[#999] uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-600 dark:text-[#999] uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] dark:bg-white dark:text-black text-white text-sm font-medium rounded-full hover:bg-[#333] dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </AnimatedDiv>
      </div>
    </section>
  );
}
