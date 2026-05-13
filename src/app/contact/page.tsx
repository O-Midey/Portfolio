"use client";
import { useState } from "react";
import {
  Instagram,
  Mail,
  Twitter,
  MessageCircle,
  Sparkles,
  Send,
  Linkedin,
} from "lucide-react";
import AnimatedDiv from "../components/AnimatedDiv";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:talk2adeoluwa2310@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true);
  }

  return (
    <section className="relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AnimatedDiv>
          {/* Hero Section */}
          <div className="mb-12 sm:mb-20">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-3">contact</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-4">
              Get in
              <br />
              <span className="text-gray-400">Touch.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm leading-relaxed">
              Open to new opportunities and interesting projects.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {/* Email Card */}
              <div className="lg:col-span-2">
                <a
                  href="mailto:talk2adeoluwa2310@gmail.com"
                  className="group block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 group-hover:bg-gray-200 rounded-full p-3 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-tight">
                        Email
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Best way to reach me
                      </p>
                      <div className="text-gray-900 font-mono text-sm break-all group-hover:text-black transition-colors">
                        talk2adeoluwa2310@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-gray-800 group-hover:text-gray-700 transition-colors">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Send a message</span>
                  </div>
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="group">
                <a
                  href="https://linkedin.com/in/omotosho-david"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-50 group-hover:bg-blue-100 rounded-full p-3 transition-colors duration-300">
                        <Linkedin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 tracking-tight">
                          LinkedIn
                        </h3>
                        <div className="text-gray-900 font-mono text-sm">
                          omotosho-david
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-auto">
                      Connect professionally 🤝
                    </p>
                  </div>
                </a>
              </div>

              {/* Twitter Card */}
              <div className="group">
                <a
                  href="https://twitter.com/meeedzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-100 group-hover:bg-gray-200 rounded-full p-3 transition-colors duration-300">
                        <Twitter className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 tracking-tight">
                          Twitter
                        </h3>
                        <div className="text-gray-900 font-mono text-sm">
                          @meeedzy
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm mb-auto">
                      Follow for updates and thoughts 💭
                    </p>
                  </div>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="group lg:col-span-4 md:col-span-2">
                <a
                  href="https://instagram.com/thismidey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 group-hover:bg-pink-50 rounded-full p-3 transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 tracking-tight">
                        Instagram
                      </h3>
                      <div className="text-gray-900 font-mono text-sm">
                        @thismidey
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm ml-auto hidden sm:block">
                      Put a face to the name 😉
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mb-16 sm:mb-20">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-lg shadow-black/5">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                  Send a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form and I&apos;ll get back to you shortly.
                </p>
                {sent ? (
                  <p className="text-green-600 font-medium text-center py-8">
                    ✅ Opening your email client... Thanks for reaching out!
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell me about your project or idea..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-black/90 text-white rounded-2xl p-8 sm:p-12 shadow-xl shadow-black/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Sparkles className="w-16 h-16" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-10">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 tracking-tight">
                    Ready to Start?
                  </h3>
                  <p className="text-gray-300 text-lg sm:text-xl font-light mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                    Whether you have a project in mind or just want to chat
                    about technology, I&apos;d love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:talk2adeoluwa2310@gmail.com"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-light text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Start a Conversation
                    </a>
                    <a
                      href="/projects"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-light text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                      View My Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
