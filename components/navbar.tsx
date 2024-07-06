"use client";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";


export default function Navbar() {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
            
        </div>
    );
}