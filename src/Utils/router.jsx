import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import DonationDetails from "../Components/DonationDetails";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Components/Forms/Login";
import Register from "../Components/Forms/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../../public/howItWorksData.json')
            },
            {
                path: '/donation',
                element: <DonationCampaigns></DonationCampaigns>,
                loader: () => fetch('../../public/donations.json'),
            },
            {
                path: '/help',
                element: <HowToHelp></HowToHelp>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <DonationDetails></DonationDetails>
                </PrivateRoute>,
                loader: () => fetch('../../public/donations.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;