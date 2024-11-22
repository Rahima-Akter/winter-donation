
import { FaBook, FaDonate, FaHeartbeat, FaHome } from "react-icons/fa";

const BannerCards = () => {
    const cardsData = [
        {
            title: "Education For Citizens",
            description: "Providing education for all citizens.",
            icon: <FaBook className="text-4xl text-yellow-400" />, // React Icon for Education
            bgImage: "https://thecsrjournal.in/wp-content/uploads/2018/05/Changing-the-Lives-of-Underprivileged-Children-The-CSR-Journal.jpg", // Background image path
          },
          {
            title: "Free Refuge Shelter",
            description: "Offering safe shelter for those in need.",
            icon: <FaHome className="text-4xl text-yellow-400" />, // React Icon for Shelter
            bgImage: "https://thecsrjournal.in/wp-content/uploads/2018/05/Changing-the-Lives-of-Underprivileged-Children-The-CSR-Journal.jpg", // Background image path
          },
          {
            title: "Medical & Blood",
            description: "Providing medical care and blood donation services.",
            icon: <FaHeartbeat className="text-4xl text-yellow-400" />, // React Icon for Medical
            bgImage: "https://thecsrjournal.in/wp-content/uploads/2018/05/Changing-the-Lives-of-Underprivileged-Children-The-CSR-Journal.jpg", // Background image path
          },
          {
            title: "Donate For Health",
            description: "Support health initiatives through donations.",
            icon: <FaDonate className="text-4xl text-yellow-400" />, // React Icon for Donations
            bgImage: "https://thecsrjournal.in/wp-content/uploads/2018/05/Changing-the-Lives-of-Underprivileged-Children-The-CSR-Journal.jpg", // Background image path
          },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className="relative group bg-white p-6 rounded-lg shadow-lg overflow-hidden cursor-pointer animate__animated animate__pulse"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"
                        style={{
                            backgroundImage: `url(${card.bgImage})`,
                        }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center text-[#334c55] group-hover:text-white ">
                        <div className="text-4xl mb-4">{card.icon}</div>
                        <h3 className="text-xl font-semiboldmb-2 font-bold">
                            {card.title}
                        </h3>
                        <p className="text-sm">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BannerCards;