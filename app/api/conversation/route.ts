
// import { auth } from "@clerk/nextjs";
// import { API_KEY } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";
// import { useState } from "react";
// const [input, setInput] = useState('');
// export { input, setInput };


// const openai = new OpenAI();

// export async function POST(
//     req: Request
// ) {
//     try {
//         const { userId } = auth();
//         const body = await req.json();
//         const { messages } = body;

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         if (!messages) {
//             return new NextResponse("Messages are required", { status: 400 });
//         }

//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: messages,
//         })

//         return NextResponse.json(response.choices[0].message);

//     } catch (error) {
//         console.log("[CONVERSATION_ERROR]", error);
//         return new NextResponse("internal error", { status: 500 });
//     }
// }



// const openai = new OpenAI({
//     apiKey: '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', dangerouslyAllowBrowser: true
// });


// export async function sendMessage() {
//     if (!input) return;

//     const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: "user", content: input }],
//         model: "gpt-3.5-turbo",
//     });

//     console.log(chatCompletion.choices[0]);

//     return(
//         input
//         <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//         />
//     );
// };