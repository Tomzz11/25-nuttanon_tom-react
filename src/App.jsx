import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-white-100 font-sans text-gray-900">
        <Navbar />
      <div className="container mx-auto p-8">
          <Outlet />
      </div>
    </div>
  );
};

export default App;


