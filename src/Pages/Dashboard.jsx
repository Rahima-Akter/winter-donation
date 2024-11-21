import React, { useContext } from "react";
import { authContext } from "../Context/Context";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Background */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg p-10 shadow-lg max-w-3xl w-[90%] relative">
                {/* Welcome Message */}
                <h1 className="text-center text-white text-4xl font-bold mb-6">
                    Welcome, {user?.displayName}! ❄️
                </h1>

                {/* User Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* User Image */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                        <img
                            src={user?.photoURL || <FaUser />}
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Information */}
                    <div className="flex-1 text-white">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Name:</h2>
                            <p className="text-gray-200">{user?.displayName}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Email:</h2>
                            <p className="text-gray-200">{user?.email}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Member Since:</h2>
                            <p className="text-gray-200">{user?.joinDate || "N/A"}</p>
                        </div>
                    </div>
                </div>

                {/* Update Profile Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate("/profile")}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
