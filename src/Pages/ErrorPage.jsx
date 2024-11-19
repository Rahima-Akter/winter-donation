import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl text-gray-700 mt-4">Oops! Page not found.</h2>
            <p className="mt-2 text-gray-600">The page you are looking for does not exists or might have been moved.</p>
            <div className="mt-6">
                <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;