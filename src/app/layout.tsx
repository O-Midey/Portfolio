import "./globals.css";
import Layout from "./_components/Layout";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Omotosho David ",
  description: "Full-Stack Developer & Blockchain Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
