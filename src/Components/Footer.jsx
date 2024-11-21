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
            <div className='w-8/12 mx-auto'>
                <div className="py-16 px-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl">Want to give charity, start from here</h1>
                        <p className="text-sm">we'll take care of it</p>
                    </div>
                    <button
                        onClick={() => navigate("/donation")}
                        className="bg-white text-black py-2 px-6 rounded-md hover:bg-[#15C8A0] flex gap-2 items-center justify-centerfont-bold"
                    >
                        <FaArrowRight className='text-black'></FaArrowRight> Donate Now
                    </button>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Section */}
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">WarmHearts</h3>
                        <p className="text-sm mb-4">
                            People from around the country trusts us and work with us. We also get support from around the world and we work to bring warmth to the people in need.
                        </p>
                        <p className="text-sm mb-4">Social Info</p>
                        <div className="flex space-x-3 text-lg">
                            <FaFacebook className="hover:text-teal-500 transition" />
                            <FaTwitter className="hover:text-teal-500 transition" />
                            <FaInstagram className="hover:text-teal-500 transition" />
                            <FaLinkedin className="hover:text-teal-500 transition" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="">
                        <h4 className="text-2xl font-bold mb-4">Our Navigation</h4>
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
                        <h4 className="text-2xl font-bold mb-4">Our Service</h4>
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
                        <h4 className="text-2xl font-bold mb-4">Our Gallery</h4>
                        <div className="grid md:grid-cols-3 gap-1 w-64">
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
                <div className="mt-12 border-t border-teal-500 pt-4 text-center mb-2">
                    <p className="text-sm">
                        Copyright © <span className="text-teal-500">WarmHearts</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
