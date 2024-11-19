
const CareAndLoveCards = () => {
    const cardsData = [
        {
            title: "Food & Water Giving",
            description: "Engaging in charitable activities not only benefits those in need.",
            icon: 'https://devsaidul.com/ui/nonpro/assets/images/service/service-icon1.png',
        },
        {
            title: "Become & Volunteer",
            description: "Engaging in charitable activities not only benefits those in need.",
            icon: 'https://devsaidul.com/ui/nonpro/assets/images/service/service-icon2.png',
        },
        {
            title: "Quick Fundraising Water",
            description: "Engaging in charitable activities not only benefits those in need.",
            icon: 'https://devsaidul.com/ui/nonpro/assets/images/service/service-icon3.png',
        },
    ];

    return (
        <div className=" bg-[#F5FAF7] flex flex-col items-center justify-center px-6 py-16 -mt-5">
            <h2 className="text-2xl md:text-sm font-bold text-[#454545] text-center mb-2">
                ❤️ Raising Your Helping Hands ❤️
            </h2>
            <h3 className="text-xl md:text-4xl font-bold text-[#454545] text-center mb-10">
                We Provide Care & Love
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="relative group bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl w-[300px] h-[320px] flex flex-col items-center justify-center"
                    >
                        {/* Icon */}
                        <div className="text-[#525459] mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                            <img src={card.icon} alt="icons" className="w-16 mx-auto" />
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-semibold text-[#454545] group-hover:text-[#15C8A0] text-center mb-3 transition-colors duration-300">
                            {card.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-600 text-sm text-center mb-6">
                            {card.description}
                        </p>

                        {/* Read More */}
                        <div className="flex justify-center items-center">
                            <a className="relative text-[#15C8A0] text-sm -mr-16 font-semibold cursor-pointer group-hover:text-[#454545] transition-colors duration-300">
                                Read More
                                <span className="absolute -left-20 bottom-2 h-[2px] w-full bg-[#15C8A0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareAndLoveCards;
