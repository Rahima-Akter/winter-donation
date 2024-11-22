import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import BannerCards from '../Components/BannerCards';
import CareAndLoveCards from '../Components/CareAndLoveCards';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <Banner></Banner>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='lg:absolute lg:-bottom-[30%] lg:left-10 z-10'>
                    <BannerCards></BannerCards>
                </div>
                <div className='lg:mt-40 my-12'>
                    <About></About>
                </div>
            </div>
            <HowItWorks></HowItWorks>
            <CareAndLoveCards></CareAndLoveCards>
        </div>
    );
};

export default Home;