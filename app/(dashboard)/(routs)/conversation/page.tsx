"use client";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

import InputConvMessage from "@/components/input-conv-message";

export default function ConversationPage() {
    return (
        <div className="flex h-full flex-col">
            <div className="flex flex-col">
                <Heading
                    title="Conversation"
                    description="Best conversation model ever!"
                    icon={MessageSquare}
                    iconColor="text-violet-500"
                    bgColor="bg-violet-500/10"
                />
            </div>
            <div className="flex">
                <InputConvMessage />
            </div>
        </div>

    );
}

