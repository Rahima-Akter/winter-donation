import { useLoaderData } from "react-router-dom";
import DonationCards from "../Components/DonationCards/DonationCards";
import UpcomingEvents from "../Components/DonationCards/UpcomingEvents";

const DonationCampaigns = () => {
    const data = useLoaderData();  // Load data from the loader

    if (!data || data.length === 0) {
        return <div>Loading...</div>;  // Show loading if no data
    }

    return (
        <div>
            <h2 className="text-center font-bold lg:text-4xl text-2xl text-[#15C8A0] mt-10 mb-8 drop-shadow-lg">Currently Running Donations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mb-12">
                {/* Map over the donations and pass each one as a prop */}
                {data.map((donation) => (
                    <DonationCards donation={donation} key={donation.id} />
                ))}
            </div>
            {/* upcoming events */}

            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default DonationCampaigns;
