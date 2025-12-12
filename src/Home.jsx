import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import Admin from './components/Admin';


const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [view, setView] = useState('');
    const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://67eca027aa794fb3222e43e2.mockapi.io/members");
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const createEmployee = async (newEmployee) => {
        try {
            const response = await axios.post("https://67eca027aa794fb3222e43e2.mockapi.io/members", newEmployee);
            setEmployees([...employees, response.data]);  
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    };


    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);
            setEmployees(employees.filter((emp) => emp.id !== id));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    }

    return (
        <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 text-teal-700">
                Generation Thailand <br />
            </h1>
            <h2 className="text-2xl font-semibold mb-12 text-gray-600">
                {view === 'user' ? 'Home - User Section' : view === 'admin'
                    ? 'Home - Admin Section'
                    : 'React - Assessment'}
            </h2>

            <div className="flex justify-center gap-6 mb-16">
                <button onClick={() => setView('user')}
                className={`font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 ${
                        view === 'user' 
                        ? 'bg-teal-500 text-white shadow-teal-300/50' 
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-teal-50 hover:text-teal-700'
                    }`}
                >

                User Home View
                </button>
                <button onClick={() => setView('admin')}
                className={`font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 ${
                        view === 'admin' 
                        ? 'bg-teal-500 text-white shadow-teal-300/50' 
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-teal-50 hover:text-teal-700'
                    }`}
                >
                Admin Home View
            </button>
            </div>

        {view === 'user' && (
        <User employees={employees} />
        )}
        {view === 'admin' && (
        <Admin
            employees={employees}
            addEmployee={createEmployee}
            deleteEmployee={deleteEmployee}
        />
        )}
        </div>);
    }

export default Home;



