import React from 'react';
import { FaGift, FaHandsHelping, FaRegMoneyBillAlt, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import HelpForm from './HelpForm';

const HowToHelp = () => {
  return (
    <div className='bg-white pb-16 w-full relative'>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      {/* how to help */}
      <div className="p-8 relative z-10">
        {/* Cards container */}
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="md:text-5xl text-3xl font-extrabold text-center drop-shadow-lg text-[#15C8A0] mb-3 animate__animated  animate__slideInTop">
            How You Can Help
          </h2>
          <div className="mb-10 text-center animate__animated animate__fadeIn">
            <p className="md:text-lg text-xs text-black lg:w-[70%] mx-auto">
              Together, we can make a big difference! Thank you for considering how you can help. Every contribution counts, no matter how big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Donation Items Section */}
            <div className="p-6 bg-white rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 animate__animated animate__slideInLeft">
              <div className="flex items-center mb-4">
                <FaGift className="text-4xl text-green-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">1. Donate Items</h3>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                We accept a variety of items that are essential for people in need. Your donations make a tangible difference in the lives of many individuals and families.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Clothes for all ages and sizes</li>
                <li>Non-perishable food (canned goods, dry items)</li>
                <li>Books and educational materials</li>
                <li>Toys for children of all ages</li>
              </ul>
            </div>

            {/* Monetary Donations Section */}
            <div className="p-6 bg-white rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 animate__animated animate__slideInRight">
              <div className="flex items-center mb-4">
                <FaRegMoneyBillAlt className="text-4xl text-yellow-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">2. Make a Monetary Donation</h3>
              </div>
              <p className="text-lg text-gray-800 mb-4">
                Monetary donations allow us to provide exactly what is needed. Your financial contributions go directly towards supporting essential services and purchasing necessary items.
              </p>
              <div className="text-center">
                <Link
                  to="/donation"
                  className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:scale-110 transition-all duration-300 animate__animated animate__zoomIn animate__delay-1s"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Volunteer Section */}
            <div className="p-6 bg-white rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 animate__animated animate__slideInLeft">
              <div className="flex items-center mb-4">
                <FaHandsHelping className="text-4xl text-purple-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">3. Volunteer Your Time</h3>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Volunteering is one of the most impactful ways to give back. Whether it’s helping with the sorting of donations or assisting at community events, your time and efforts are invaluable.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:scale-110 transition-all duration-300 animate__animated animate__zoomIn animate__delay-1s"
                >
                  Volunteer Now
                </a>
              </div>
            </div>

            {/* Spread the Word Section */}
            <div className="p-6 bg-white rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 animate__animated animate__slideInRight">
              <div className="flex items-center mb-4">
                <FaShareAlt className="text-4xl text-blue-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">4. Spread the Word</h3>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                If you can’t donate items or time, spreading the word is incredibly helpful. Sharing our mission with your friends and family can help raise awareness and encourage more people to get involved.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Share our social media posts</li>
                <li>Tell others about our cause</li>
                <li>Invite your community to donate</li>
              </ul>
            </div>
          </div>

          {/* Footer Section */}
          
        </div>

        {/* Snowfall Effect */}
        <Snowfall color="yellow" snowflakeCount={50} />
      </div>

      {/* HelpForm */}
      <div className=''>
        <HelpForm></HelpForm>
      </div>
    </div>
  );
};

export default HowToHelp;
