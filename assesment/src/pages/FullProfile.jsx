import React from "react";

const FullProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl w-full">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Akhilesh Bisht</h2>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">About Me</h3>
          <p className="mt-2 text-gray-600">
            I specialize in creating user-friendly web apps with a focus on
            React and Tailwind CSS.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FullProfile;
