import React from 'react';

const Owner = () => {
  return (
    <div className="flex flex-col items-center mt-12 p-8 bg-white rounded-xl shadow-2xl max-w-lg mx-auto border border-gray-100">
      <h1 className="text-3xl font-extrabold mb-8 text-teal-700 border-b pb-2 border-teal-200">25 Nuttanon (Tom) - JSD11</h1>
      <img src="/ninja_p.jpg"
      alt="profile"
      className="rounded-full w-52 h-52 object-cover mb-8 shadow-xl ring-4 ring-orange-500 ring-opacity-50"
      />
      <h3 className="font-bold text-xl mb-3 text-gray-700">Short Biography:</h3>
      <p className="text-center max-w-md text-gray-600 text-lg leading-relaxed italic">
        Hi, I am Tom, the coffee & yerba mate lover.
        <br/>
        And like to sit in the nature zone with the music.
      </p>
    </div>
  );
};


export default Owner;







