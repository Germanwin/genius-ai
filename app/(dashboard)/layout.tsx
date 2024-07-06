import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


export default function DashbosrdLayout(
    { children }: { children: React.ReactNode; }
) {
    return (
        <div className="relative h-full">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72 h-full">
                <Navbar />
                {children}
            </main>
        </div>
    );

}