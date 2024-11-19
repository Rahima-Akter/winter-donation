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
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white text-gray-800 relative overflow-hidden pb-24 pt-10 z-10 bg-image">
            {/* Snowfall */}
            <Snowfall snowflakeCount={80} color="white" />

            {/* Twinkling Lights Background */}
            <div className="twinkling-lights" />

            {/* Header */}
            <h2 className="text-4xl font-bold text-center text-white py-10 drop-shadow-lg">
                🎄 How We Work 🎄
            </h2>

            {/* Donation Section */}
            <div className="relative mx-auto max-w-6xl bg-white rounded-lg shadow-lg border-4 border-dashed border-green-400 overflow-hidden">
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
                    <h3 className="text-3xl font-bold text-red-600 text-center shimmer">
                        🎁 Donate Today & Spread Christmas Cheer! 🎁
                    </h3>
                    <p className="text-lg text-center text-gray-700 mt-4">
                        <strong>How to Donate:</strong> Find your nearest collection point,
                        and bring joy to those in need. Your small help can bring a big
                        difference!
                    </p>
                </div>
                {/* Hover Effect */}
                <div className="donation-hover-overlay"></div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 mt-16">
                {data
                    .find((item) => item.type === "collectionPoints")
                    ?.content.map((point, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-6 rounded-lg shadow-lg card-christmas group overflow-hidden"
                        >
                            {/* Decorations */}
                            <div className="absolute top-2 right-2 winter-cap animate-bounce z-10" />
                            <div className="garlands" />
                            <div className="ornaments" />
                            <div className="sparkling-lights" />


                            
                            {/* <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"
                                style={{
                                    backgroundImage: `url(${item.images})`,
                                }}
                            ></div>

                            
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div> */}

                            {/* Card Content */}
                            <h4 className="text-lg font-bold text-red-700 mb-2 card-title hover:text-green-600 transition-all duration-300">
                                {point.name}
                            </h4>
                            <p className="text-gray-700">
                                <strong>Address:</strong> {point.address}
                            </p>
                            <p className="text-gray-700">
                                <strong>Contact:</strong> {point.contact}
                            </p>

                            {/* Background image transition on hover */}
                            {/* <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"
                                style={{
                                    backgroundImage: `url(${getBackgroundImage(point.name)})`,
                                }}
                            ></div> */}
                            <div
                                className="bg-cover bg-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${getBackgroundImage(point.name)})`,
                                }}
                            ></div>
                        </div>
                    ))}
            </div>

            {/* Supported Divisions Section */}
            <div className="mt-16 px-6 md:px-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Supported Divisions</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {data
                        .find((item) => item.type === "supportedDivisions")
                        ?.content.map((division, index) => (
                            <div
                                key={index}
                                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg text-lg font-medium hover:bg-green-700 hover:scale-105 transform transition-all duration-300 snowflake-hover"
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
