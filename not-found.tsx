import { Home, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <section className="relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          {/* 404 Display */}
          <div className="mb-8 sm:mb-12">
            <div className="text-8xl sm:text-9xl md:text-[12rem] font-black text-gray-100 select-none leading-none">
              404
            </div>
            <div className="relative -mt-8 sm:-mt-12 md:-mt-20">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/5 border border-gray-200 rounded-full">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Oops! Page Not Found
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
              <br className="hidden sm:block" />
              Let&apos;s get you back on track!
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-full font-medium text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 sm:mt-16">
            <p className="text-gray-500 text-sm mb-4 font-medium uppercase tracking-wide">
              Or try these pages
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 hover:bg-gray-100 rounded-full"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 hover:bg-gray-100 rounded-full"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 hover:bg-gray-100 rounded-full"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
