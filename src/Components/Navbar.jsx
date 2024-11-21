import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { authContext } from '../Context/Context';

// const Navbar = ({ user }) => {
const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [user, setUser] = useState(false)

    // Toggle the mobile menu open/close
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    console.log('this is user3', user)

    return (
        <nav className="bg-[#273e47] p-4">
            <div className="flex items-center justify-between">
                {/* Logo (on the right for large screens) */}
                <div className="hidden lg:flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Site Logo" className="w-16 rounded-full" />
                    </Link>
                </div>

                {/* Navbar Links (centered on large screens) */}
                <div className="hidden lg:flex space-x-6 items-center mx-auto">
                    <NavLink to="/" className="text-white hover:text-[#15C8A0]">Home</NavLink>
                    <NavLink to="/donation" className="text-white hover:text-[#15C8A0]">Donation Campaigns</NavLink>
                    <NavLink to="/help" className="text-white hover:text-[#15C8A0]">How to Help</NavLink>
                    <NavLink to="/dashboard" className="text-white hover:text-[#15C8A0]">Dashboard</NavLink>
                </div>

                {/* User Profile or Login Button for large screens */}
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <div className='flex gap-1 items-center'>
                            <Link
                                onClick={logOut}
                                className="text-white text-xs btn btn-sm bg-[#15C8A0] rounded hover:bg-[#1b8870] font-bold"
                            >
                                LogOut
                            </Link>
                            <Link to="/profile">
                                <img
                                    src={user?.photoURL || "https://i.pinimg.com/564x/a4/8a/ca/a48aca275e3dbe9a00d8f90e095f25ae.jpg"} // fallback image URL for the user avatar
                                    alt="User Profile"
                                    className="h-10 w-10 rounded-full"
                                />
                            </Link>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="text-white py-2 px-4 bg-[#15C8A0] rounded hover:bg-[#1b8870] font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu and Icons (visible on small screens) */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    {/* Logo on left for small screens */}
                    <Link to="/">
                        <img src={logo} alt="Site Logo" className="h-10 w-auto" />
                    </Link>

                    {/* Hamburger Icon for small screens */}

                    <button onClick={handleMenuToggle} className="text-white">
                        {isMenuOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>

                </div>
            </div>

            {/* Mobile Menu (Slide in from the right) */}
            {isMenuOpen && (
                <div
                    className="lg:hidden bg-gray-800 text-white w-52 fixed right-3 top-20 rounded-lg transform transition-transform duration-300 ease-in-out z-10"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {/* User Profile or Login Button */}
                        {user ? (<div className='flex gap-1 justify-between items-center'>
                            <Link to="/profile">
                                <img
                                    src={user?.photoURL || 'default-avatar.jpg'}
                                    alt="User Profile"
                                    className="h-10 w-10 rounded-full"
                                />
                            </Link>
                            <Link onClick={logOut} to="" className="text-white text-xs btn btn-sm bg-[#15C8A0] rounded hover:bg-[#1b8870] font-bold">
                                LogOut
                            </Link>
                        </div>
                        ) : (
                            <Link to="/login" className="text-white py-2 px-4 bg-[#15C8A0] rounded hover:bg-blue-700">
                                Login
                            </Link>
                        )}
                        <Link to="/" className="block">Home</Link>
                        <Link to="/donation-campaigns" className="block">Donation Campaigns</Link>
                        <Link to="/how-to-help" className="block">How to Help</Link>
                        <Link to="/dashboard" className="block">Dashboard</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
