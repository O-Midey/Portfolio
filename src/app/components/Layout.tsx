import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeProvider from "./ThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="bg-[#fafafa] dark:bg-[#111] transition-colors duration-300">
        <Navbar />
        <div className="md:flex">
          <Sidebar />
          <main className="flex-1 md:ml-52 min-h-screen pb-28 md:pb-0 max-w-5xl">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
