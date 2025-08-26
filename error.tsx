"use client";

import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { JSX, useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <section className="relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          {/* Error Icon */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-50 border border-red-200 rounded-full">
              <span className="text-xs sm:text-sm font-medium text-red-700 tracking-wide uppercase">
                Something went wrong
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Oops! An Error Occurred
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-6">
              Something unexpected happened. Don&apos;t worry, it&apos;s not
              your fault.
              <br className="hidden sm:block" />
              Let&apos;s try to get things working again.
            </p>

            {/* Error details in development */}
            {process.env.NODE_ENV === "development" && (
              <details className="text-left bg-gray-100 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-gray-600 overflow-auto whitespace-pre-wrap">
                  {error.message}
                  {error.stack && "\n\n" + error.stack}
                </pre>
              </details>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-full font-medium text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </div>

          {/* Helpful message */}
          <div className="mt-12 sm:mt-16">
            <p className="text-gray-500 text-sm">
              If this problem persists, please{" "}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                contact me
              </Link>{" "}
              and I&apos;ll fix it as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
