import React, { useContext } from 'react';
import { FaSnowflake } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import { authContext } from '../Context/Context';

const ProfileUpdate = () => {
    const navigate = useNavigate();
    const { manageProfile } = useContext(authContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        console.log(name, photoUrl);

        // Update profile
        manageProfile(name, photoUrl)
            .then(() => {
                // console.log('Profile updated successfully!');
                navigate('/dashboard')
            })
            .catch((err) => {
                console.error('Error updating profile:', err);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 flex items-center justify-center relative">
            {/* Snowfall Effect */}
            <Snowfall snowflakeCount={150} color="white" style={{ position: "fixed", width: "100vw", height: "100vh" }} />
            <Snowfall snowflakeCount={50} color="yellow" style={{ position: "fixed", width: "100vw", height: "100vh" }} />

            {/* Profile Update Form */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg shadow-lg relative overflow-hidden w-[90%] max-w-md">
                {/* Frosted Snowflake Decorations */}
                <div className="absolute top-[-50px] left-[-50px] text-blue-300 opacity-30 animate-spin-slow">
                    <FaSnowflake size={200} />
                </div>
                <div className="absolute bottom-[-50px] right-[-50px] text-blue-300 opacity-30 animate-spin-reverse">
                    <FaSnowflake color="blue" size={120} />
                </div>

                {/* Form Header */}
                <h2 className="text-center text-white text-3xl font-bold mb-4">
                    Update your profile
                </h2>

                {/* Profile Update Form */}
                <form onSubmit={handleUpdateProfile} className="space-y-3">
                    {/* Name Input */}
                    <div>
                        <label className="text-gray-300 text-sm bg-transparent mb-2">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>

                    {/* Profile Photo URL Input */}
                    <div>
                        <label className="text-gray-300 text-sm bg-transparent mb-2">Your Profile Photo URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            placeholder="Paste your photo URL here"
                            className="w-full bg-transparent border border-white rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        // onClick={() => navigate('/dashboard')}
                        className="btn bg-white hover:bg-transparent py-2 w-full text-lg hover:text-white text-black duration-1000"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
