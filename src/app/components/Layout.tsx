import Sidebar from "./Sidebar";
import ThemeProvider from "./ThemeProvider";
import ThemeWipeProvider from "./ThemeWipeProvider";
import CursorTrailer from "./CursorTrailer";
import ScrollProgress from "./ScrollProgress";
import GradientOrb from "./GradientOrb";
import PageTransition from "./PageTransition";
import Spotlight from "./Spotlight";
import MobileHeader from "./mobile/MobileHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWipeProvider>
        <div className="noise bg-[#fafafa] dark:bg-[#111] transition-colors duration-300 max-md:bg-term-bg">
          <CursorTrailer />
          {/* Desktop-only ambience — the mobile terminal view has its own backdrop */}
          <div className="hidden md:block">
            <ScrollProgress />
            <GradientOrb />
            <Spotlight />
          </div>
          <PageTransition />
          <MobileHeader />
          <div className="md:flex">
            <Sidebar />
            <main className="flex-1 md:ml-14 min-h-screen">{children}</main>
          </div>
        </div>
      </ThemeWipeProvider>
    </ThemeProvider>
  );
}
