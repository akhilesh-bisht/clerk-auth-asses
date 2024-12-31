import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Akhilesh Bisht</h2>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Passionate developer with expertise in React, Tailwind CSS, and
            scalable web apps.
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/full-profile")}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
