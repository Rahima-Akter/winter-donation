import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// banner bg images
const winterImages = [
    'https://img.freepik.com/premium-photo/photo-portrait-group-poor-children-sit-ground_763111-216001.jpg',
    'https://img.freepik.com/premium-photo/world-humanitarian-day-helping-hand-those-affected-by-war-famine-social-problem-camp-refugees-agust-19-need-protection-food-homes-search-better-life-generative-ai_771426-10990.jpg',
    'https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494199.jpg',
    'https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494485.jpg',
];

const Banner = () => {
    const navigate = useNavigate()
    return (
        <section className="relative w-full mb-6 h-[550px] rounded-md bg-gray-900">
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
                modules={[Autoplay, Pagination]}
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
                            <div className="absolute inset-0 bg-black opacity-40 flex items-center rounded-md">
                                <div className="ml-8 text-white lg:px-20 py-3 lg:pl-[8%] lg:pr-[12%] md:pl-[2%] md:pr-[0%] lg:py-6 lg:w-4/6 w-3/6">
                                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
                                        Support Local Communities This Winter
                                    </h2>
                                    <p className="lg:text-lg mb-6 text-white lg:pr-[8%] md:pr-[22%]">
                                        Join our donation campaign to provide warmth and support
                                        to those in need. Together, we can make a difference.
                                    </p>
                                    <button
                                        onClick={() => navigate("/donation")}
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
