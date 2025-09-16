import { skills } from "../_data/skills";
import {
  MailOpen,
  User,
  Code2,
  ExternalLink,
  Briefcase,
  Star,
  Code,
} from "lucide-react";
import AnimatedDiv from "../_components/AnimatedDiv";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AnimatedDiv>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/5 border border-gray-200 rounded-full mb-6 sm:mb-8">
              <User className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase">
                About Me
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-none px-2">
              Full-Stack Developer &{" "}
              <span className="block">Blockchain Engineer</span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Story Section */}
            <div className="mb-16 sm:mb-20">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-gray-700 text-md md:text-lg  leading-relaxed font-light">
                  I&apos;m a full-stack developer who builds end-to-end
                  solutions using the{" "}
                  <span className="font-bold text-gray-900">MERN stack</span>{" "}
                  and creates decentralized applications with{" "}
                  <span className="font-bold text-gray-900">Solidity</span>,{" "}
                  <span className="font-bold text-gray-900">Hardhat</span>, and{" "}
                  <span className="font-bold text-gray-900">Ethers.js</span>.
                </p>

                <p className="text-gray-700 text-md md:text-lg  leading-relaxed font-light">
                  From database design to smart contracts, I deliver complete
                  solutions that bridge traditional web development with
                  blockchain technology. I approach every project with precision
                  and creativity, whether I&apos;m architecting scalable
                  databases or writing secure smart contracts.
                </p>

                <p className="text-gray-700 text-md md:text-lg  leading-relaxed font-light">
                  Each line of code is an opportunity to build something
                  meaningful that users will love. When I&apos;m not coding,
                  I&apos;m usually vibing to some good Afrobeats. There&apos;s
                  something about the energy that keeps me motivated during
                  those late-night development sessions 🎶✨
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5">
                  <p className="text-gray-700 text-md md:text-lg  leading-relaxed font-light">
                    You can check out my playlist{" "}
                    <a
                      className="text-gray-900 hover:text-black font-semibold underline decoration-2 underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists"
                    >
                      here
                    </a>
                    😉🎧
                  </p>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Code
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 font-medium">
                  MERN stack development
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star
                    className="text-purple-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">
                  Blockchain Development
                </h3>
                <p className="text-gray-600 font-medium">
                  Smart Contracts & Web3
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Briefcase
                    className="text-green-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600 font-medium">
                  From DB to Smart Contracts
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/5 border border-gray-200 rounded-full mb-6">
                  <Code2 className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase">
                    Tech Stack
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                  Skills & Technologies
                </h2>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 font-mono font-medium bg-gray-900 text-white text-xs sm:text-sm rounded-full shadow-sm hover:bg-black hover:scale-105 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-black/90 text-white rounded-2xl p-8 sm:p-12 shadow-xl shadow-black/20">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Let&apos;s Build Something Amazing
                </h3>
                <p className="text-gray-200 text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let&apos;s discuss your
                  next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:talk2adeoluwa2310@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-light hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    <MailOpen className="w-4 h-4" />
                    Get In Touch
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-light hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 " />
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
