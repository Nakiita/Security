import React, { useState, useEffect } from "react";
import { getAllDoctorsApi } from "../../apis/Api";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllDoctorsApi().then((res) => {
      setDoctors(res.data.doctors);
    });
  }, []);

  const filteredDoctors = doctors.filter((person) =>
    person.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="flex justify-center w-full">
            <div className="flex items-center mb-3 mx-auto mt-24 max-w-xl">
              <span className="input-group-text bg-gray-200 border-none">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control border-none"
              />
            </div>
          </div>
          <h3 className="text-center w-full">FIND YOUR DOCTOR</h3>
          <div className="flex flex-wrap justify-center w-full">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-3">
                {filteredDoctors.map((person, index) => (
                  <div className="p-3 w-full sm:w-1/2 md:w-1/4" key={index}>
                    <div className="card bg-white shadow-lg rounded-lg">
                      <img
                        src={person.uploadValidIdUrl}
                        height={300}
                        width={300}
                        alt={person.fullName}
                        className="h-72 w-full object-cover"
                        style={{ marginTop: 10 }}
                      />
                      <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{person.fullName}</h5>
                        <p className="card-text text-sm">
                          {person.qualification}<br />
                          {person.servicesOffered}
                        </p>
                        <Link
                          to={`/details/${person._id}`}
                          className="btn btn-dark mt-3 inline-block bg-black text-white py-2 px-4 rounded"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;