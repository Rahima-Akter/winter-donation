import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()

    const navLinks = ['Membership Info', 'Annual Posts', 'FAQs', 'Info'];
    const services = ['Reliability & Accountability', 'Timely Assistance', 'Charity Events', 'Fund Raising'];
    const galleryImages = [
        'https://t3.ftcdn.net/jpg/08/21/46/84/360_F_821468476_IDYhar0gZTs8fnoSLNTj8FVRL404K4DG.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XoqzHPoeVKAcwSRhmfrv65jCrwqvfEnJTc-P6jn7wHy3TUGdvzkyvu93vzQbhUZmvsU&usqp=CAU',
        'https://t3.ftcdn.net/jpg/08/13/92/94/360_F_813929435_Saofh96YJzTGNigb2rafHMKmHMVwWCL0.jpg',
        'https://t3.ftcdn.net/jpg/10/33/65/48/360_F_1033654868_8rp5MOz52lrnXqRVBiMjHgEVnG7ZDEql.jpg',
        'https://img.freepik.com/free-photo/photorealistic-refugee-camp_23-2151446254.jpg',
        'https://img.freepik.com/free-photo/photorealistic-refugee-camp_23-2151446270.jpg',
    ];

    return (
        <footer className="bg-gray-900 text-white pt-5">
            <div className='lg:w-[70%] md:w-[80%] mx-auto'>
                <div className="py-16 px-6 flex lg:flex-row flex-col justify-between items-center">
                    <div className="text-left w-full">
                        <h1 className="lg:text-4xl md:text-2xl text-[22px]">Want to give charity? start from here</h1>
                        <p className="text-sm md:mt-2">Your one contribution can bring smile on peoples face</p>
                    </div>
                    <div className="w-full">
                        <button
                            onClick={() => navigate("/donation")}
                            className="bg-white text-black py-2 px-6 rounded-md hover:bg-[#15C8A0] flex gap-2 items-center justify-centerfont-bold lg:mt-0 mt-5 lg:float-right"
                        >
                            <FaArrowRight className='text-black'></FaArrowRight> Donate Now
                        </button>
                    </div>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="">
                        <h3 className="text-2xl font-bold mb-2">WarmHearts</h3>
                        <div className="text-sm">
                            <p>Address: House 123, Road 10, Gulshan-2, Dhaka</p>
                            <p>Phone: +88 0123456789</p>
                            <p>email: <span className='text-red-500 hover:underline'> warmhearts@gmail.com</span></p>
                        </div>
                        <p className="text-sm mb-2 mt-3">Social Info</p>
                        <div className="flex space-x-3 text-lg">
                            <FaFacebook className="hover:text-teal-500 transition" />
                            <FaTwitter className="hover:text-teal-500 transition" />
                            <FaInstagram className="hover:text-teal-500 transition" />
                            <FaLinkedin className="hover:text-teal-500 transition" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="">
                        <h4 className="text-[20px] font-bold">Our Navigation</h4>
                        <div className='border border-teal-500 w-[30%] mb-4'></div>
                        <ul>

                            {navLinks.map((link, index) => (
                                <div key={index} className='flex gap-1 hover:text-teal-500 hover:translate-x-2 transition-transform duration-300'><MdOutlineDoubleArrow className='text-teal-500 mt-[2px]' /><li className="mb-2">
                                    {link}
                                </li></div>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="">
                        <h4 className="text-[20px] font-bold">Our Service</h4>
                        <div className='border border-teal-500 w-[30%] mb-4'></div>
                        <ul>
                            {services.map((service, index) => (
                                <div key={index} className='flex gap-1 hover:text-teal-500 hover:translate-x-2 transition-transform duration-300'><MdOutlineDoubleArrow className='text-teal-500 mt-[2px]' /><li className="mb-2">
                                    {service}
                                </li></div>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div className="">
                        <h4 className="text-[20px] font-bold">Our Gallery</h4>
                        <div className='border border-teal-500 w-[30%] mb-4'></div>
                        <div className="grid md:grid-cols-3 grid-cols-3 gap-1 md:w-64">
                            {galleryImages.map((image, index) => (
                                <div key={index} className="relative group w-full h-20 overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full transform transition duration-300 group-hover:scale-105 obeject-cover"
                                    />
                                    {/* Top-to-Bottom Overlay */}
                                    <div className="absolute inset-0 bg-[#fd7e14] opacity-0 group-hover:opacity-40 group-hover:animate-slideDown transition-all duration-500 ease-in-out"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-teal-500 py-4 text-center">
                    <p className="text-sm mt-2 mb-7">
                        Copyright © <span className="text-teal-500">WarmHeartsFoundation</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
