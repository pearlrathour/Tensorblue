import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './assets/logo.png';

export default function Home() {
    return (
        <div className={`h-screen w-full animate-colorAnimate`}>
            <div className='h-full flex flex-col justify-center items-center space-y-2'>
                <img className="w-20 h-20" src={logo} alt="" />
                <div className='text-white text-3xl font-extrabold pt-6'>Welcome to Logo.</div>
                <div className='text-white text-xl font-semibold'>Your ultimate AI assistant</div>
                <div className='flex flex-row space-x-8 py-4'>
                    <div className='h-10 w-24 bg-gray-100 flex items-center justify-center text-lg text-slate-900 hover:bg-white hover:font-medium rounded-md'>
                        <Link to="/login" target="_self">Login</Link>
                    </div>
                    <div className='h-10 w-24 bg-gray-100 flex items-center justify-center text-lg text-slate-900 hover:bg-white hover:font-medium rounded-md'>
                        <Link to="/signup" target="_self" >Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};