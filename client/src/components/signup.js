import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function UserSignup() {
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.elements.username.value,
                password: e.target.elements.password.value
            })
        });
        const j = await response.json();
        console.log(response);
        console.log(j);
        console.log(j.success)
        if (j.success) {
            navigate("/home");
        }
        else {
            console.log("Signup Error");
        }
    }

    return (
        <div className="bg-slate-200 h-screen w-full">
            <div className="flex flex-col h-full items-center justify-center space-y-4">
                <img className="w-20 h-20" src={logo} alt="Logo" />
                <div className="text-gray-800 font-bold text-3xl">Create your account</div>
                <div className="w-[30%] bg-white rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0 dark:bg-white">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="/business/signup" method="post" onSubmit={handleSubmit}>
                            <div>
                                <input type="email" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-md block w-full p-2.5 dark:bg-transparent dark:border-gray-300 dark:placeholder-gray-500 focus:placeholder-gray-400 focus:border-none" placeholder="Email address" required />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-zinc-100 text-gray-900 sm:text-base rounded-md block w-full p-2.5 dark:bg-transparent dark:border-gray-300 dark:placeholder-gray-500 focus:placeholder-gray-400" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-md text-sm px-5 py-2.5 text-center">
                                Create an account
                            </button>
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Already have an account?
                                <Link to="/login" className="font-medium text-sky-600 hover:underline cursor-pointer ml-2">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};