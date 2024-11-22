import React, { useContext, useRef, useState } from "react";
import Snowfall from "react-snowfall"; // Snowfall animation package
import { FaEye, FaEyeSlash, FaGoogle, FaSnowflake } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Context";

const Login = () => {
    const { handleGoogleLogin, logIn,user, setUser, setLoading } = useContext(authContext)
    const emailRef = useRef()
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const handleShowHide = () => {
        setShow(!show)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, password)

        logIn(email, password)
            .then(res => {
                navigate(location.state.from)
                setUser(res.user)
                setLoading(true)
            })
            .catch(err => {
                setError(err.message.split('/')[1].slice(0,18))
            })
    }



    return (
        <div className="py-12 bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Effect */}
            <Snowfall snowflakeCount={150} color="white" style={{ position: "fixed", width: "100vw", height: "100vh", }} />
            <Snowfall snowflakeCount={50} color="yellow" style={{ position: "fixed", width: "100vw", height: "100vh", }} />

            {/* Login Form Container */}
            <div onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg shadow-lg relative overflow-hidden w-[90%] max-w-md animate__animated animate__lightSpeedInLeft">
                {/* Frosted Snowflake Decorations */}
                <div className="absolute top-[-50px] left-[-50px] text-blue-300 opacity-30 animate-spin-slow">
                    <FaSnowflake size={200} />
                </div>
                <div className="absolute bottom-[-50px] right-[-50px] text-blue-300 opacity-30 animate-spin-reverse">
                    <FaSnowflake color="blue" size={120} />
                </div>

                {/* Form Header */}
                <h2 className="text-center text-white text-4xl font-bold mb-0">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-300 text-sm mb-8">
                    Log in to make others winter warm!
                </p>

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
                    {/* Password Input */}
                    <div className="relative">
                        <label className="text-gray-300 text-sm bg-transparent mb-2">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
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

                    {/* error msg */}
                    {
                        error && <p className="text-white text-sm">{error}</p>
                    }

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full btn bg-transparent text-gray-300 hover:text-black font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Log In
                    </button>
                    <div className="divider text-gray-300">OR</div>
                    <button onClick={handleGoogleLogin} className="btn bg-white hover:bg-transparent py-2 w-full text-lg hover:text-white text-black  duration-1000"><FaGoogle /><span className="mt-1">Sign in with Google</span></button>
                </form>

                {/* Additional Options */}
                <div className="text-center text-gray-300 mt-6">
                    <p>
                        Forgot your password?{" "}
                        <Link to="/forget" className="text-blue-300 hover:text-white">
                            Reset here
                        </Link>
                    </p>
                    <p className="mt-2">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-300 hover:text-white">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
