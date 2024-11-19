import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper components
import 'swiper/css';  // Import core styles for swiper
import 'swiper/css/navigation';  // Import styles for navigation (arrows)
import 'swiper/css/pagination';  // Import styles for pagination (dots)
import {  } from 'swiper';  // Import the necessary modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

// Winter-themed images (replace with actual images or URLs)
const winterImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4TzHSGwyEWJLYM_XniMyGwK4pR8hv7cfVA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1e2XjXunSBGJZXX9i_1nu27fmBhTepNSPXs6B4ZgtP7FLeOchmC53293t0qf1Nlu_ss&usqp=CAU',
    'https://media.istockphoto.com/id/1077916628/photo/donation-box-with-warm-winter-clothes-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=-W-8A4N2hG_CBQQj5KGqv5timQ6CCE1stYMzT8g0pNI=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJplx68O_KfdxCY2e7htpJTcwtFNdJyO3pF-jQrp7uMtY0h6dCWZRMRpg582Qe6wdCcE&usqp=CAU',
];

const Banner = () => {
    return (
        <section className="relative w-full mb-6 h-[500px] rounded-md bg-gray-900">
            {/* Swiper container for the banner */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay,  Pagination]}  // Passing the necessary modules
                className="w-full h-full"
            >
                {/* Map over winterImages to generate slides */}
                {winterImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        >
                            {/* Darker overlay for better contrast */}
                            <div className="absolute inset-0 bg-black opacity-70 flex items-center rounded-md">
                                <div className="ml-8 text-white px-6 py-3 md:px-12 md:py-6 w-3/6">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                                        Support Local Communities This Winter
                                    </h2>
                                    <p className="text-lg mb-6 text-white">
                                        Join our donation campaign to provide warmth and support
                                        to those in need. Together, we can make a difference.
                                    </p>
                                    <button
                                        href="/donation-campaigns"
                                        className="bg-[#15C8A0] text-white py-2 px-6 rounded-md hover:bg-[#1b8870] flex gap-2 items-center justify-centerfont-bold"
                                    >
                                       <FaArrowRight className='text-white'></FaArrowRight> Donate Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Optional: Add a custom label on top of the banner */}
            
        </section>
    );
};

export default Banner;
