import React from 'react';

const About = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row items-center lg:items-center gap-12 px-6 py-10 mb-10 w-10/12 mx-auto animate__animated animate__slideInLeft">
                <div className="lg:w-[58%]  lg:order-1 order-2">
                    <p className='text-red-500 font-bold text-lg my-4'>→ About Us</p>
                    <h2 className="text-3xl lg:text-[40px] font-bold text-[#334c55] mb-4 leading-tight">
                        Helping Each Can Make Our Life Better😇
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Our mission is simple: We want to make sure that no one has to suffer from
                        the cold during winter. Your donation helps provide warm clothing, blankets,
                        and other necessities to individuals and families in need. Whether it's a winter
                        coat, gloves, scarves, or socks, every item can make a huge difference.
                    </p>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300">
                        Donate Now →
                    </button>
                </div>

                {/* Image Container */}
                <div className="lg:w-[42%] lg:order-2 order-1 relative overflow-hidden animate__animated animate__slideInRight">
                    <img
                        src="https://devsaidul.com/ui/nonpro/assets/images/about/about-thumb.png"
                        alt="About Us"
                        className="z-10 w-full transition-transform duration-1000 transform hover:scale-110"
                    />
                </div>
            </section>
        </>
    );
};

export default About;
