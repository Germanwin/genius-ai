"use client";
import { Heading } from "@/components/heading";
import { CodeIcon, MessageSquare } from "lucide-react";

import InputCodeMessage from "@/components/input-conv-message";

export default function CodePage() {
    return (
        <div className="flex h-full flex-col">
            <div className="flex flex-col">
                <Heading
                    title="Code Generation"
                    description="Generate code using descriptive text!"
                    icon={CodeIcon}
                    iconColor="text-green-700"
                    bgColor="bg-green-700/10"
                />
            </div>
            <div className="flex">
                <InputCodeMessage />
            </div>
        </div>

    );
}

