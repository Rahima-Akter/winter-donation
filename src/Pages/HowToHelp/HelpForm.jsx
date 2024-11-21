import React from 'react';

const HelpForm = () => {
  return (
    <section className="relative bg-gray-100 py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 bg-cover bg-center h-96 lg:h-auto relative bg-helpForm-bg">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Join your hand with us for a better life and future</h2>
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
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 mt-10 lg:mt-0 lg:ml-8">
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
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Icons */}
      <div className="mt-12 bg-orange-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around text-center">
          <div>
            <div className="text-teal-600 text-3xl mb-2">❤️</div>
            <p className="font-semibold">Heart Care Charity</p>
          </div>
          <div>
            <div className="text-teal-600 text-3xl mb-2">🤝</div>
            <p className="font-semibold">Charity Help & Support</p>
          </div>
          <div>
            <div className="text-teal-600 text-3xl mb-2">🌍</div>
            <p className="font-semibold">Give Love Foundation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpForm;
