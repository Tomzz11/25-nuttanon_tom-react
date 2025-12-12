import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="border-b border-green-300 p-4 bg-white">
            <div className="container mx-auto flex justify-end gap-8 font-bold text-green-800">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/owner" className="hover:text-blue-600">Owner</Link>
            </div>
        </nav>

    );
};

export default Navbar;




