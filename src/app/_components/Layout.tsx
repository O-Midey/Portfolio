import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto  md:flex gap-8">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
