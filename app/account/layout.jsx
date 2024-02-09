import SideNav from "@/app/ui/dashboard/sidenav";
import Navbar from "../ui/dashboard/Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-black h-screen grid grid-rows-[92px_1fr]">
      <Navbar />
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 md:border-t-2 border-gray-900">
          <SideNav />
        </div>
        <div className="bg-black flex-grow p-6 md:overflow-y-auto md:p-8 border-t-2 md:border-l-2 border-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
