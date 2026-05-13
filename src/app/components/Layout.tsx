import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeProvider from "./ThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#111] overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <div className="max-w-7xl mx-auto md:flex gap-4">
          <Sidebar />
          <main className="flex-1 pb-28 md:pb-0">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
