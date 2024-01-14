import React from "react";
import '../index.css';
import { ChatBubbleLeftIcon, PlusCircleIcon, BackspaceIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    return (
        <div className="fixed w-[25%] h-screen bg-slate-800 border-r border-slate-600">
            <div className="flex flex-col justify-between items-center h-full px-8 py-5">
                <div className="flex flex-col justify-start items-center space-y-4 w-full">
                    <div className="text-2xl font-medium text-white pb-3">Text Generator</div>
                    <div className="h-9 w-full rounded-3xl bg-slate-700">
                        <button type="submit" className="h-full flex justify-center items-center px-4 space-x-5 text-base">
                            <ChatBubbleLeftIcon className="h-5 w-5 text-gray-200 " />
                            <div className="text-gray-300">nkjghgm jkjh jkljh</div>
                        </button>
                    </div>
                    <div className="h-9 w-full rounded-3xl bg-slate-700">
                        <button type="submit" className="h-full flex justify-center items-center px-4 space-x-5 text-base">
                            <ChatBubbleLeftIcon className="h-5 w-5 text-gray-200 " />
                            <div className="text-gray-300">nkjghgm jkjh jkljh</div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-full space-y-4 py-[25%]">
                    <div className="h-9 w-full rounded-3xl bg-transparent border border-green-300">
                        <button type="submit" className="h-full flex justify-center items-center px-4 space-x-5 text-base">
                            <PlusCircleIcon className="h-5 w-5 text-green-300 " />
                            <div className="text-green-300 ">New Chat</div>
                        </button>
                    </div>
                    <div className="h-9 w-full rounded-3xl bg-transparent border border-red-400">
                        <button type="submit" className="h-full flex justify-center items-center px-4 space-x-5 text-base">
                            <BackspaceIcon className="h-5 w-5 text-red-400 " />
                            <div className="text-red-400">Clear Conversation</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};