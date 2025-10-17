import {
  Instagram,
  Mail,
  Twitter,
  MessageCircle,
  Sparkles,
  Send,
} from "lucide-react";
import AnimatedDiv from "../components/AnimatedDiv";

export default function Contact() {
  return (
    <section className="relative overflow-hidden  mt-20 md:mt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AnimatedDiv>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/5 border border-gray-200 rounded-full mb-6 sm:mb-8">
              <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase">
                Contact
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-none px-2">
              Get in Touch
            </h1>

            <p className="text-xl sm:text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4">
              I&apos;m always interested in hearing about{" "}
              <span className="text-gray-900 font-semibold">
                new opportunities
              </span>{" "}
              and{" "}
              <span className="text-gray-900 font-semibold">
                interesting projects
              </span>
              .
              <br className="hidden sm:block" />
              Let&apos;s collaborate and build something amazing together!
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {/* Email Card */}
              <div className="md:col-span-2 lg:col-span-1">
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
              <div className="group">
                <a
                  href="https://instagram.com/thismidey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-100 group-hover:bg-gray-200 rounded-full p-3 transition-colors duration-300">
                        <Instagram className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 tracking-tight">
                          Instagram
                        </h3>
                        <div className="text-gray-900 font-mono text-sm">
                          @thismidey
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-auto">
                      Put a face to the name 😉
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-black/90 text-white rounded-2xl p-8 sm:p-12 shadow-xl shadow-black/20 relative overflow-hidden">
                {/* Background decoration */}
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
