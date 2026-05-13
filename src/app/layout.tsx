import "./globals.css";
import Layout from "./components/Layout";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Omotosho Ayomide ",
  description: "Full-Stack & Blockchain Developer building Web3 apps and full-stack products",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-gray-200/10`}>
      <body className="">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
