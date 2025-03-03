"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useState, useEffect } from "react";

export default function MobileSidebar() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(
        () => {
            setIsMounted(true);
        }, []
    );
    if (!isMounted) {
        return null;
    }


    return (
        

        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>



            <SheetContent side="left" className="p-0 bg-gray-900">
                <Sidebar />
            </SheetContent>
        </Sheet>

    );
}