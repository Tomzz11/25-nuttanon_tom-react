import React, { useState } from 'react';

const Admin = ({ employees, addEmployee, deleteEmployee }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [position, setPosition] = useState('');
  const handleSave = () => {

    if (!name || !lastname || !position) {
      alert("Please fill in all fields");
      return;
    }

      const newEmp = {
        name: name,
        lastname: lastname,
        position: position
    };

        addEmployee(newEmp);
        setName('');
        setLastname('');
        setPosition('');
  };

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-gray-700 text-left">Create User Here</h3>
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row gap-4 mb-10 border border-gray-100">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-md w-full md:w-auto shadow-green-300/50"
        >
          Save
        </button>
      </div>

      <div className="w-full overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-100">
        <table className="min-w-full text-left">
          <thead className="bg-teal-50 text-teal-700 border-b border-gray-200">
            <tr>
              <th className="py-4 px-6 font-bold">Name</th>
              <th className="py-4 px-6 font-bold">Last Name</th>
              <th className="py-4 px-6 font-bold">Position</th>
              <th className="py-4 px-6 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 transition duration-100">
                <td className="py-3 px-6">{emp.name}</td>
                <td className="py-3 px-6">{emp.lastname}</td>
                <td className="py-3 px-6">{emp.position}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="text-red-600 hover:text-red-800 font-semibold hover:underline transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Admin;



