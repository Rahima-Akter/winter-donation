import React from 'react';

const HelpForm = () => {
  return (
    <section className="relative py-10 mb-20">
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Section with background image */}
        <div
          className="w-full bg-cover bg-center h-96 lg:h-[470px] relative"
          style={{
            backgroundImage: "url('https://devsaidul.com/ui/nonpro/assets/images/resource/contact-bg.jpg')",
            backgroundSize: 'cover', // Ensure the image covers the area
            backgroundPosition: 'center', // Ensure the image is centered
          }}
        >

          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* text contents */}
          <div className='absolute flex flex-col justify-center items-start lg:p-8 md:pl-3 px-5 text-white lg:w-2/4 md:w-[60%] my-14 lg:ml-28 animate__animated animate__slideInLeft'>
            <h2 className="lg:text-4xl text-3xl font-bold mb-4">Join your hand with us for a better life and future</h2>
            <p className="mb-6">
              Together we can bring warmth and comfort to those in need this winter. Contribute to help provide blankets, clothes, and food for underprivileged families in Bangladesh.
            </p>
            <p className="flex items-center mb-6">
              <span className="font-medium text-lg">Free contact 24/7:</span>
              <span className="ml-2 text-teal-400 font-bold">+880 123-456-789</span>
            </p>
            <button className="bg-teal-600 text-white py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition duration-300">
              Donate Now
            </button>
          </div>

          {/* Footer Icons */}
          <div className="bg-[#bd632f] lg:pt-5 lg:pb-20 py-[45px] absolute lg:-bottom-14 md:-bottom-[150px] md:w-[60%] top-full">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around text-center md:space-y-0 space-y-8">
              <div className="w-16">
                <img src="https://devsaidul.com/ui/nonpro/assets/images/brand/brand1.png" alt="" />
              </div>
              <div className="w-16">
                <img src="https://devsaidul.com/ui/nonpro/assets/images/brand/brand3.png" alt="" />
              </div>
              <div className="w-14">
                <img src="https://devsaidul.com/ui/nonpro/assets/images/brand/brand4.png" alt="" />
              </div>
              <div className="w-14">
                <img src="https://devsaidul.com/ui/nonpro/assets/images/brand/brand2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* form Section */}
        <div className="lg:w-[32%] md:w-[40%] w-[80%] bg-white shadow-lg lg:p-8 p-4 lg:mt-0 lg:ml-8 md:absolute right-20 lg:right-48 md:top-24 animate__animated animate__slideInRight -mr-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Interested in Donating?</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Donation Amount"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <textarea
              placeholder="Write Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>


    </section>
  );
};

export default HelpForm;
