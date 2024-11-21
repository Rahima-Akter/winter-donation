import { useNavigate } from "react-router-dom";

const DonationCards = ({ donation }) => {

    const Navigate = useNavigate()

    return (
        <div className="">
            {/* No need to map, just display the donation data */}
            <div
                key={donation.id}
                className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transform hover:bg-red-50 transition-all duration-1000 flex flex-col h-full cursor-pointer group"
            >
                {/* Card Image */}
                <div className="relative">
                    <div className="w-full overflow-hidden">
                        <img
                            src={donation.image}
                            alt={donation.title}
                            className="w-full h-52 object-cover group-hover:scale-110 duration-500"
                        />
                        <div className="absolute -bottom-8 -left-4 w-full p-4">
                            <button
                                onClick={() => Navigate(`/details/${donation.id}`)}
                                className="bg-[#15C8A0] text-white py-2 px-4 font-bold hover:bg-[#30ac91] duration-300 z-10"
                            >
                                Donate Now 
                            </button>
                        </div>
                    </div>
                </div>
                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between mt-3">
                    <h3 className="text-lg font-bold text-[#334c55] group-hover:text-[#15C8A0]">
                        {donation.title}
                    </h3>
                    <p className="text-gray-700 mb-2">{donation.description}</p>
                    <p className="text-red-500 font-medium">
                        Division: {donation.division}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationCards;
