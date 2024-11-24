import React, { useState } from 'react';
import { toast } from 'react-toastify';

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        availability: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., sending data to server)
        console.log(formData);

        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            availability: '',
            message: '',
        });

        toast.success('Thank you for applying to be a volunteer! We will soon contact you for an interview');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label htmlFor="availability" className="block text-gray-700">Availability</label>
                <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-700">Why do you want to volunteer?</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-[#15C8A0] text-white py-2 rounded-md hover:bg-teal-600"
            >
                Submit
            </button>
        </form>
    );
};

export default VolunteerForm;
