import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="border-b border-teal-300 p-4 bg-teal-50 shadow-md">
            <div className="container mx-auto flex justify-end gap-8 font-semibold text-gray-700">
                <Link to="/" className="text-lg hover:text-teal-600 transition duration-150">Home</Link>
                <Link to="/owner" className="text-lg hover:text-teal-600 transition duration-150">Owner</Link>
            </div>
        </nav>
    );
};


export default Navbar;






