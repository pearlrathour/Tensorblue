import React from "react";
import { MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import '../index.css';

export default function Searchbar() {
    return (
        <div className="h-16 py-3 bg-gray-900/80 flex flex-row justify-between items-center">
            <div className="w-full flex justify-center">
                <form action="">
                    <input type="text" placeholder="Search anything..." className="p-2 px-6 w-64 bg-slate-600 border rounded-full border-slate-500 text-gray-200 focus:outline-none" />
                </form>
            </div>
            <div className="flex flex-row justify-center items-end space-x-4 px-4">
                <BellIcon className="h-8 w-6 text-gray-200" />
                <div className="flex flex-row space-x-1">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU"} alt="" />
                    </div>
                    <ChevronDownIcon className="h-8 w-5 text-gray-200" />
                </div>
            </div>
        </div>
    );
};