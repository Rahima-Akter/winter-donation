
import { FaBook, FaDonate, FaHeartbeat, FaHome } from "react-icons/fa";

const BannerCards = () => {
    const cardsData = [
        {
            title: "Education For Citizens",
            description: "Providing education for all citizens.",
            icon: <FaBook className="text-4xl text-yellow-400" />,
            bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRfpIJWCZq50YDkxiCNEqXMwwYWSV4oVf-g&s",
        },
        {
            title: "Free Refuge Shelter",
            description: "Offering safe shelter for those in need.",
            icon: <FaHome className="text-4xl text-yellow-400" />,
            bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBa5RetVQgcZi2mK57VG66KM2aXVWh0vXzHk1glnvxmkPO3spTLlqMD9TwLkpdAO4EVk&usqp=CAU",
        },
        {
            title: "Medical & Blood",
            description: "Providing medical care and blood donation services.",
            icon: <FaHeartbeat className="text-4xl text-yellow-400" />,
            bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjC2GwFqwoW6Gbe80cFfid0itdI1-hE-7jnvqp7ytPS0z9LIsYqGEc9uYh_OjD9ya-dwc&usqp=CAU",
        },
        {
            title: "Donate For Health",
            description: "Support health initiatives through donations.",
            icon: <FaDonate className="text-4xl text-yellow-400" />,
            bgImage: "https://thecsrjournal.in/wp-content/uploads/2018/05/Changing-the-Lives-of-Underprivileged-Children-The-CSR-Journal.jpg",
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