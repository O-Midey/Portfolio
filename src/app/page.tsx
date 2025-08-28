
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Code,
  Star,
  Briefcase,
} from "lucide-react";
import AnimatedDiv from "./_components/AnimatedDiv";

export default function HomePage() {
  return (
    <AnimatedDiv className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-20 min-h-screen flex flex-col items-center justify-center gap-6 px-4 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
          Omotosho David A.
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto font-light tracking-wide">
          Full-Stack Developer & Blockchain Engineer
        </p>

        <div className="flex items-center justify-center gap-8 mb-16">
          <a
            href="https://github.com/o-midey"
            target="_blank"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://linkedin.com/in/omotosho-david"
            target="_blank"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-blue-600" />
          </a>
          <a
            href="https://twitter.com/meeedzy"
            target="_blank"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110"
          >
            <Twitter size={24} className="text-blue-400" />
          </a>
          <a
            href="https://instagram.com/thismidey"
            target="_blank"
            className="p-3 bg-gray-100 rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110"
          >
            <Instagram size={24} className="text-pink-500" />
          </a>
        </div>

        <a
          href="/about"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl"
        >
          Learn More About Me
          <ArrowRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </a>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-8">
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
          <p className="text-gray-600 font-medium">MERN stack development</p>
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
          <p className="text-gray-600 font-medium">Smart Contracts & Web3</p>
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
    </AnimatedDiv>
  );
}
