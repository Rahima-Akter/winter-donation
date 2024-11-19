import { useLoaderData } from "react-router-dom";
import DonationCards from "../Components/DonationCards";

const DonationCampaigns = () => {
    const data = useLoaderData();  // Load data from the loader

    if (!data || data.length === 0) {
        return <div>Loading...</div>;  // Show loading if no data
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 my-20">
            {/* Map over the donations and pass each one as a prop */}
            {data.map((donation) => (
                <DonationCards donation={donation} key={donation.id} />
            ))}
        </div>
    );
};

export default DonationCampaigns;
