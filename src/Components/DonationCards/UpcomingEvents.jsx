import React, { useEffect, useState } from 'react';
import { FaCalendar, FaLocationArrow } from 'react-icons/fa';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [currentModal, setCurrentModal] = useState(null);

    useEffect(() => {
        fetch('../UpcomingEvents.json')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.log("Events error", err));
    }, []);

    const openModal = (event) => {
        setCurrentModal(event);
    };

    const closeModal = () => {
        setCurrentModal(null);
    };

    return (
        <div className="w-11/12 mx-auto px-4 my-12">
            <h2 className="text-center font-bold lg:text-4xl text-2xl text-[#15C8A0] mt-10 mb-8 drop-shadow-lg animate__animated animate__zoomIn">
                Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}  // Use event.id as key
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
                            <p className="text-sm flex gap-1 items-center text-[#15C8A0] mt-2"><FaLocationArrow />
                                <span className="font-medium">Location:</span> {event.location}
                            </p>
                            <p className="text-sm flex gap-1 items-center text-[#15C8A0] mt-1"><FaCalendar />
                                <span className="font-medium">Time:</span> {event.time}
                            </p>
                            <p className="text-sm text-gray-600 mt-3">{event.description}</p>
                            <button
                                onClick={() => openModal(event)}  // Pass the entire event object
                                className="mt-4 bg-[#15C8A0] text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">
                                More Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {currentModal && (
                <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="modal-box bg-white p-8 rounded-lg">
                        <div>
                            <div className='w-full h-[200px]'>
                                <img
                                    src={currentModal.img}
                                    alt={currentModal.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{currentModal.title}</h3>
                            <p className="text-gray-600 mt-2">{currentModal.detailedDescription}</p>
                        </div>
                        <div className="modal-action w-full">
                            <button className="btn w-full bg-[#15C8A0] hover:bg-teal-700 font-bold text-white" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;
