import React from 'react';
import { FaCalendar, FaLocationArrow } from 'react-icons/fa';

const UpcomingEvents = () => {
    const events = [
        {
            title: 'Warm Clothes Distribution Drive',
            location: 'Community Center, Dhaka',
            time: 'Sat 10:00 AM - 12:00 PM',
            description: 'Join us to distribute warm clothes to those in need.',
            img: 'https://img.freepik.com/free-vector/hand-drawn-flat-charity-event-facebook-post_23-2149398755.jpg?t=st=1730501055~exp=1730504655~hmac=23a5cb0ae1812d57395c1f8e9f486770f59841f0ffe5a6c5b0cd6ae8abf28756'
        },
        {
            title: 'Food Package Preparation',
            location: 'Relief Hub, Chittagong',
            time: 'Sun 3:00 PM - 5:00 PM',
            description: 'Help us pack food for underprivileged families.',
            img: 'https://www.shutterstock.com/image-vector/donation-food-distribution-concept-volunteer-260nw-1627524631.jpg'
        },
        {
            title: 'Fundraising for Winter Relief',
            location: 'City Hall, Sylhet',
            time: 'Sun 10:00 AM - 1:00 PM',
            description: 'Attend a concert and contribute to winter relief efforts.',
            img: 'https://img.freepik.com/free-vector/fundraising-event-template-design_23-2150806468.jpg'
        },
        {
            title: 'Blanket Donation Campaign',
            location: 'Local School, Rajshahi',
            time: 'Thu 4:00 PM - 6:00 PM',
            description: 'Donate blankets to help families stay warm this winter.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_N6Pfg8hhHKvOW24php8dczKtFIoRq0GDxw&s'
        },
    ];

    return (
        <div className="w-11/12 mx-auto px-4 my-12">
            <h2 className="text-center font-bold lg:text-4xl text-2xl text-[#15C8A0] mt-10 mb-8">
                Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className='w-full h-[200px]'>
                            <img
                                src={event.img}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                            <p className="text-sm flex gap-1 items-center text-[#15C8A0] mt-2"><FaLocationArrow/>
                                <span className="font-medium">Location:</span> {event.location}
                            </p>
                            <p className="text-sm flex gap-1 items-center text-[#15C8A0] mt-1"><FaCalendar/>
                                <span className="font-medium">Time:</span> {event.time}
                            </p>
                            <p className="text-sm text-gray-600 mt-3">{event.description}</p>
                            <button className="mt-4 bg-[#15C8A0] text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">
                                More Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;
