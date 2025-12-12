import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import Admin from './components/Admin';

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [view, setView] = useState('');

    const API_UR = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

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

    // Create (POST)
    const createEmployee = async (newEmployee) => {
        try {
            const response = await axios.post("https://67eca027aa794fb3222e43e2.mockapi.io/members");
            setEmployees([...employees, response.data]);   
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    };

    // Delete (DELETE)
    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);
            setEmployees(employees.filter((emp) => emp.id !== id));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }

    }
    // About rendering
    return (
        <div >
            <h1>Generation Thailand</h1> <br />
            {view === 'user' ? 'Home - User Section' : view === 'admin' ? 'Home - Admin Section' : 'React - Assessment'}
            
            

        </div>


    );
}

export default Home;











