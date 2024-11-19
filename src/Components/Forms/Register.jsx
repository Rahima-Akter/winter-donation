import React, { useState } from "react";
import Snowfall from "react-snowfall"; // Snowfall animation package
import { FaEye, FaEyeSlash, FaSnowflake } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [show, setShow] = useState(false)

    const handleShowHide = () => {
        setShow(!show)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('working')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Effect */}
            <Snowfall snowflakeCount={150} color="white" style={{ position: "fixed", width: "100vw", height: "100vh", }} />
            <Snowfall snowflakeCount={50} color="yellow" style={{ position: "fixed", width: "100vw", height: "100vh", }} />

            {/* Register Form Container */}
            <div onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 px-10 py-5 rounded-lg shadow-lg relative overflow-hidden w-[90%] max-w-md my-10">
                {/* Frosted Snowflake Decorations */}
                <div className="absolute top-[-50px] left-[-50px] text-blue-300 opacity-30 animate-spin-slow">
                    <FaSnowflake color="whitesmoke" size={200} />
                </div>
                <div className="absolute bottom-[-50px] right-[-50px] text-blue-300 opacity-30 animate-spin-reverse">
                    <FaSnowflake color="gold" size={120} />
                </div>

                {/* Form Header */}
                <h2 className="text-center text-white text-4xl font-bold mb-0">
                    Register
                </h2>
                <p className="text-center text-gray-300 text-sm mb-3">
                    Register to make others life a little warm!
                </p>

                {/* Login Form */}
                <form className="space-y-3">
                    {/* Name Input */}
                    <div className="">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>
                    {/* photoURl Input */}
                    <div className="">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Your photoURl
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />

                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />

                        {/* eye icon */}

                        <div onClick={handleShowHide} className="absolute right-5 top-11">
                            {
                                show ? <FaEye className="text-white"></FaEye> : <FaEyeSlash className="text-white"></FaEyeSlash>
                            }
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Additional Options */}
                <div className="text-center text-gray-300 mt-3">
                    <p className="mt-2">
                        Don’t have an account?{" "}
                        <Link to="/login" className="text-blue-300 hover:text-white">
                            login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
