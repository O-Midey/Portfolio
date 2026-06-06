import "./globals.css";
import Layout from "./components/Layout";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
    "Omotosho David",
  ],
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-gray-200/10`} suppressHydrationWarning>
      <body className="">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
