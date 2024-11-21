import React from "react";
import Snowfall from "react-snowfall";
import { FaGift, FaTree, FaStar } from "react-icons/fa";
import "../Components/Styles/styles.css"; // Add custom styles here
import { useLoaderData } from "react-router-dom";

const HowItWorks = () => {
    const data = useLoaderData();

    // Function to get dynamic background images based on collection point name
    const getBackgroundImage = (name) => {
        const images = {
            "Dhaka Collection Center": "https://images.pexels.com/photos/1303086/pexels-photo-1303086.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1303086.jpg&fm=jpg",
            "Chattogram Donation Point": "/path/to/chattogram-bg.jpg",
            "Sylhet Regional Office": "/path/to/sylhet-bg.jpg",
            "Khulna Drop-off Location": "/path/to/khulna-bg.jpg",
            "Barishal Support Point": "/path/to/barishal-bg.jpg",
            "Rangpur Collection Point": "/path/to/rangpur-bg.jpg",
        };
        return images[name] || "/path/to/default-bg.jpg"; // Default background
    };

    return (
        <div className="bg-gradient-to-b from-blue-900 to-white text-gray-800 relative overflow-hidden pb-12 md:pb-24 md:pt-10 z-10 bg-image">
            {/* Snowfall */}
            <Snowfall snowflakeCount={80} color="white" />

            {/* Twinkling Lights Background */}
            <div className="twinkling-lights" />

            {/* Header */}
            <h2 className="text-4xl font-bold text-center text-white py-10 drop-shadow-lg">
                 How It Works 
            </h2>

            {/* Donation Section */}
            <div className="relative mx-auto w-[87%] bg-white bg-opacity-80 rounded-lg shadow-lg border-4 border-dashed border-green-400 overflow-hidden">
                <div className="absolute -top-5 left-5 animate-pulse">
                    <FaGift size={40} className="text-red-500" />
                </div>
                <div className="absolute -top-5 right-5 animate-pulse">
                    <FaTree size={40} className="text-green-500" />
                </div>
                <div className="absolute -bottom-5 left-5 animate-pulse">
                    <FaStar size={40} className="text-yellow-400" />
                </div>
                <div className="p-8">
                    <h3 className="text-xl md:text-3xl font-bold text-red-600 text-center shimmer">
                        🎁 Donate Today & Spread Warmth This Winter! 🎁
                    </h3>
                    <p className="text-lg text-center text-gray-700 mt-4">
                        <strong>How to Donate:</strong> Find your nearest collection point (Bkash, Nagad, Rocket, etc) for money donation or fill out a form and we'll come and pick it up for you
                        and bring joy to those in need. Your small help can bring a big
                        difference! ❤❤
                    </p>
                </div>
                {/* Hover Effect */}
                <div className="donation-hover-overlay"></div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5 lg:px-6 px-0 w-[87%] mx-auto lg:mt-16 mt-10">
                {data
                    .find((item) => item.type === "collectionPoints")
                    ?.content.map((point, index) => (
                        <div key={index} className="relative bg-white bg-opacity-20 backdrop-blur-md border border-white text-white p-6 rounded-lg shadow-lg card-christmas group overflow-hidden w-full group">

                            {/* Card Content */}
                            <h4 className="text-lg font-bold text-white mb-2 card-title group-hover:text-[#9ae7f1] group-hover:text-xl transition-all duration-1000 cursor-pointer">
                                {point.name}
                            </h4>
                            <p className="opacity-70 group-hover:opacity-100 duration-1000">
                                <strong>Address:</strong> {point.address}
                            </p>
                            <p className="opacity-70 group-hover:opacity-100 duration-1000">
                                <strong>Contact:</strong> {point.contact}
                            </p>

                        </div>
                    ))}
            </div>

            {/* Supported Divisions Section */}
            <div className="md:mt-8 px-6 md:px-8 text-center">
                <h3 className="text-4xl font-bold text-center text-white py-6 drop-shadow-lg">Supported Divisions</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {data
                        .find((item) => item.type === "supportedDivisions")
                        ?.content.map((division, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-50 text-white px-6 py-2 rounded-full shadow-lg text-sm md:text-lg font-medium hover:scale-105 transform transition-all duration-1000 snowflake-hover"
                            >
                                ❄️ {division}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
