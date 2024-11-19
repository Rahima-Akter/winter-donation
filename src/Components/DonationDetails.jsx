import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Snowfall from "react-snowfall";

const DonationDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); // Extract donation ID from the URL
    const donation = data.find((item) => item.id === parseInt(id));

    // Form State
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon 💟", {
            position: "top-center",
        });

        // Reset the form
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    if (!donation) {
        return <div className="text-center text-red-700 font-bold">Donation not found.</div>;
    }

    return (
        <div className="min-h-[calc(100vh-800px)] bg-gradient-to-b from-blue-900 to-white relative overflow-hidden group">
            {/* Snowfall effect */}
            <Snowfall color="yellow" snowflakeCount={200} />

            <div className="lg:grid lg:grid-cols-2 lg:gap-0 p-8 max-w-7xl mx-auto relative z-10">

                {/* Image Section (Left) */}
                <div className="relative flex items-center justify-center overflow-hidden">
                    <Snowfall color="white" snowflakeCount={40} />
                    <img
                        src={donation.image}
                        alt={donation.title}
                        className="w-full h-full object-cover group-hover:scale-110 duration-1000 rounded-tl-xl rounded-bl-xl shadow-lg"
                    />
                </div>

                {/* Form Section (Right) */}
                {/* <div className="relative bg-white bg-opacity-20 backdrop-blur-xl rounded-tr-xl rounded-br-xl p-8 shadow-2xl flex flex-col justify-between h-full"> */}
                <div className="relative glass rounded-tr-xl rounded-br-xl p-8 shadow-2xl flex flex-col justify-between h-full">
                    <Snowfall color="gold" snowflakeCount={20} />
                    <h2 className="text-3xl font-bold text-center text-white mb-6">
                        Donate to {donation.title}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Quantity */}
                        <div>
                            <label htmlFor="quantity" className="block text-lg font-medium text-white mb-2">
                                Quantity of Items
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                placeholder="e.g. 2"
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Item Type */}
                        <div>
                            <label htmlFor="itemType" className="block text-lg font-medium text-white mb-2">
                                Item Type
                            </label>
                            <input
                                type="text"
                                id="itemType"
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleInputChange}
                                placeholder="e.g. blanket, jacket, sweater"
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Pickup Location */}
                        <div>
                            <label htmlFor="pickupLocation" className="block text-lg font-medium text-white mb-2">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleInputChange}
                                placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Additional Notes */}
                        <div>
                            <label htmlFor="notes" className="block text-lg font-medium text-white mb-2">
                                Additional Notes (optional)
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                placeholder="e.g. Call before arrival"
                                className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="overflow-hidden">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 px-6 font-semibold text-lg shadow-md transform hover:scale-110 transition-all duration-1000"
                            >
                                Submit Donation
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;
