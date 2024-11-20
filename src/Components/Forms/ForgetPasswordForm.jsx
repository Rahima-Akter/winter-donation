import React, { useContext, useRef } from 'react';
import { FaSnowflake } from 'react-icons/fa';
import Snowfall from 'react-snowfall';
import { authContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

const ForgetPasswordForm = () => {
    const { hadleForgetPassword } = useContext(authContext)
    const emailRef = useRef()

    // forget password
    const forgetPassword = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        console.log(email)
        hadleForgetPassword(email)
            .then(() => {
                alert('email sent check your mail')
                emailRef.current.value = '';
            })
            .catch(err => console.log('Error', err))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Effect */}
            <Snowfall snowflakeCount={150} color="white" style={{ position: "fixed", width: "100vw", height: "100vh", }} />
            <Snowfall snowflakeCount={50} color="yellow" style={{ position: "fixed", width: "100vw", height: "100vh", }} />

            {/* Login Form Container */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg shadow-lg relative overflow-hidden w-[90%] max-w-md">
                {/* Frosted Snowflake Decorations */}
                <div className="absolute top-[-50px] left-[-50px] text-blue-300 opacity-30 animate-spin-slow">
                    <FaSnowflake size={200} />
                </div>
                <div className="absolute bottom-[-50px] right-[-50px] text-blue-300 opacity-30 animate-spin-reverse">
                    <FaSnowflake color="blue" size={120} />
                </div>

                {/* Form Header */}
                <h2 className="text-center text-white text-3xl font-bold mb-0">
                    Fill in the form to reset your password
                </h2>
                {/* Login Form */}
                <form className="space-y-3">
                    {/* Email Input */}
                    <div className="">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            ref={emailRef}
                            name="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />

                    </div>
                    <button
                        onClick={forgetPassword}
                        type='submit'
                        className="btn bg-white hover:bg-transparent py-2 w-full text-lg hover:text-white text-black  duration-1000">Reset Password</button>
                </form>
                <p className="mt-2">
                    go back to login?{" "}
                    <Link to="/login" className="text-blue-300 hover:text-white">
                        login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPasswordForm;