"use client"; // This enables the file to use client-side features like useState

import { useState } from "react";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { user: true, text: input }]);
            // Mock AI response (replace with real AI API later)
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { user: false, text: `AI Response to: "${input}"` },
                ]);
            }, 1000);
            setInput("");
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <div className="h-80 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-3 rounded-lg ${msg.user
                            ? "bg-blue-600 text-white self-end"
                            : "bg-gray-600 text-gray-200 self-start"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow p-2 rounded-l-lg bg-gray-700 text-gray-200 focus:outline-none"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-blue-500 rounded-r-lg text-white hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
