import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  //Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 h-full w-34 bg-gray-100 shadow-md flex flex-col">
      <div className="flex items-center justify-center py-4">
        <Link to="/admin" className="text-xl font-semibold text-blue-600">
          HEALTH CARE
        </Link>
      </div>
      <nav className="flex flex-col mt-6 space-y-2 text-lg font-semibold">
        <Link
          to="/admin"
          className="px-4 py-2 hover:bg-gray-200 transition duration-200"
        >
          DOCTOR
        </Link>
        <Link
          to="/admin/appointments"
          className="px-4 py-2 hover:bg-gray-200 transition duration-200"
        >
          APPOINTMENT
        </Link>
        <Link
          to="/admin/users"
          className="px-4 py-2 hover:bg-gray-200 transition duration-200"
        >
          USER
        </Link>
      </nav>
      <div className="mt-auto mb-4 px-4">
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="flex items-center text-gray-700 hover:text-gray-900 transition duration-200"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <img
              src="../assets/images/logo.png"
              alt="HC"
              className="w-8 h-8 rounded-full mr-2"
            />
            <strong>HC</strong>
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link
                to="/forgotPassword"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
              >
                CHANGE PASSWORD
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 flex items-center"
              >
                <FontAwesomeIcon icon={faSignOut} className="mr-2" />
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
