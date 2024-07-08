
import OpenAI from "openai";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BotAvatar } from "./bot-avatar";
import { UserAvatar } from "./user-avatar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { env } from "process";
import { CreateChatCompletionRequestMessage } from "openai/resources/index.mjs";
import { ChatCompletionMessageParam } from "openai/src/resources/index.js";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true
});

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function InputCodeMessage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async () => {
        const userMessage: Message = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);



        try {
            const first: ChatCompletionMessageParam = ({
                role: "system", 
                content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
                
            });

            const chatCompletion = await openai.chat.completions.create({
                messages: [first, { role: "user", content: input}],
                model: "gpt-3.5-turbo",
            });

            const responseMessage = chatCompletion.choices[0].message?.content ?? "No response received";
            const assistantMessage: Message = { role: "assistant", content: responseMessage };
            setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = { role: "assistant", content: "An error occurred while sending the message." };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }

        setInput('');
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            document.getElementById("generateButton")?.click();
            setInput('');
        }
    }



    return (
        <div className="flex max-h-max flex-col w-full p-8 gap-y-8">
            <div className="flex p-4 gap-y-4 flex-col lg:flex-row gap-x-8 border border-slate-800 rounded-md">
                <Input
                    id="promptInput"
                    type="text"
                    value={input}
                    onKeyDown={
                        (e) => {
                            onKeyDown(e);
                        }
                    }
                    onChange={(e) => setInput(e.target.value)}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="how to fart?"
                />
                <Button id="generateButton" onClick={sendMessage}>Generate</Button>
            </div>

            <div className="">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`} >
                        <div className={cn("mb-4 p-8 rounded flex flex-row items-center gap-8", message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}     >
                            <div>
                                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            </div>
                            <div>
                                {message.content}
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}