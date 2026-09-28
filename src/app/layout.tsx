import "./globals.css";
import Layout from "./components/Layout";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Omotosho Ayomide ",
  description:
    "AI Engineer and Full-Stack & Blockchain Developer building AI-powered, Web3, and full-stack products",
  keywords: [
    "AI Engineer",
    "AI Engineering",
    "LLM",
    "AI Agents",
    "Full-Stack Developer",
    "Blockchain Developer",
    "Web3",
    "Next.js",
    "Omotosho David A.",
  ],
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} bg-gray-200/10`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
