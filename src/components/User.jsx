import React from 'react';

const User = ({ employees }) => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full max-w-5xl overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-100">
        <table className="min-w-full text-left">
          <thead className="bg-teal-50 text-teal-700 border-b border-gray-200">
            <tr>
              <th className="py-4 px-6 font-bold">Name</th>
              <th className="py-4 px-6 font-bold">Last Name</th>
              <th className="py-4 px-6 font-bold">Position</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 transition duration-100">
                <td className="py-3 px-6">{emp.name}</td>
                <td className="py-3 px-6">{emp.lastname}</td>
                <td className="py-3 px-6">{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default User;







