import React, { useContext } from "react";
import { authContext } from "../Context/Context";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    return (
        <div className="py-16 bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Background */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg p-6 md:p-10 lg:py-12 shadow-lg lg:w-7/12 md:w-6/12 w-10/12 mx-auto relative">
                {/* Welcome Message */}
                <h1 className="text-center text-white text-4xl font-bold mb-6 lg:block hidden -ml-32">
                    Welcome, {user?.displayName}!
                </h1>

                {/* User Profile Section */}
                <div className="flex flex-col lg:flex-row items-center gap-6 w-[80%] mx-auto">
                    {/* User Image */}
                    <div className="relative w-32 h-32 lg:w-[50%] lg:h-[35%] lg:rounded-md rounded-full overflow-hidden shadow-lg border-4 border-white lg:border-none">
                        <img
                            src={user?.photoURL || <FaUser />}
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Information */}
                    <div className="flex-1 text-white lg:w-[50%]">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Name: <span className="text-gray-200 text-sm">{user?.displayName}</span></h2>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Email: <span className="text-gray-200 text-sm">{user?.email}</span></h2>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Member Since: <span className="text-gray-200 text-sm">{user?.joinDate || "N/A"}</span></h2>
                        </div>

                        {/* Update Profile Button */}
                        <div className="md:mt-8 mt-3 lg:ml-">
                            <button
                                onClick={() => navigate("/profile")}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-lg font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Dashboard;
