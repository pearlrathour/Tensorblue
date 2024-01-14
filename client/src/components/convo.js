import React from "react";
import '../index.css';
import { PaperClipIcon, MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function Convo() {
    return (
        <div className="fixed h-full w-[75%] ml-[25%] bg-slate-800 pl-[4%] pr-[8%] ">
            <div className="h-full flex flex-col justify-between items-center pb-20 pt-6 px-8">
                <div className="text-white">
                    HI
                </div>
                <div className="w-[100%] bg-transparent border border-gray-200 rounded-lg">
                    <form className="flex flex-row justify-start items-center px-4 space-x-4" action="">
                        <PaperClipIcon className="h-5 w-5 text-gray-200">
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-700" id="file_input" type="file" />
                        </PaperClipIcon>
                        <input type="text" placeholder="Send a message" className="p-2 w-[100%] bg-transparent focus:outline-none text-gray-200" />
                        <MicrophoneIcon className="h-5 w-5 text-gray-200"/>
                        <PaperAirplaneIcon className="h-5 w-5 text-green-300"/>
                    </form>
                </div>
            </div>
        </div>
    );
};