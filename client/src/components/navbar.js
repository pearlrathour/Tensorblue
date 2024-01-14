import React from "react";
import logo from "../assets/logo.png";
import { Squares2X2Icon, ArrowTrendingUpIcon, ChatBubbleLeftIcon, PhotoIcon, MusicalNoteIcon, BookmarkIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import '../index.css';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 z-40 w-[4.5%] h-screen" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-start items-center bg-slate-600 text-gray-200">
                <div className="flex flex-col py-3">
                    <img className="h-[40%] w-[100%]" src={logo} alt="Logo" />
                    <div className="font-semibold text-sm">LOGO.</div>
                </div>
                <div className="flex flex-col items-center py-10 space-y-7">
                    <Squares2X2Icon className="h-6 w-6" />
                    <ArrowTrendingUpIcon className="h-6 w-6" />
                    <ChatBubbleLeftIcon className="h-6 w-6 text-green-400" />
                    <PhotoIcon className="h-6 w-6" />
                    <MusicalNoteIcon className="h-6 w-6" />
                    <BookmarkIcon className="h-6 w-6" />
                    <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
};