import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeProvider from "./ThemeProvider";
import ThemeWipeProvider from "./ThemeWipeProvider";
import CursorTrailer from "./CursorTrailer";
import ScrollProgress from "./ScrollProgress";
import GradientOrb from "./GradientOrb";
import PageTransition from "./PageTransition";
import Spotlight from "./Spotlight";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWipeProvider>
        <div className="noise bg-[#fafafa] dark:bg-[#111] transition-colors duration-300">
          <CursorTrailer />
          <ScrollProgress />
          <GradientOrb />
          <PageTransition />
          <Spotlight />
          <Navbar />
          <div className="md:flex">
            <Sidebar />
            <main className="flex-1 md:ml-14 min-h-screen pb-28 md:pb-0">
              {children}
            </main>
          </div>
        </div>
      </ThemeWipeProvider>
    </ThemeProvider>
  );
}
