import React, { useState, useEffect } from "react";
import {
  createDoctorApi,
  getPaginationApi,
  deleteDoctorApi,
} from "../../apis/Api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered doctors
  const filteredDoctors = doctors.filter((person) =>
    person.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get user
  const user = JSON.parse(localStorage.getItem("user"));

  // Doctor details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [qualification, setQualification] = useState("");
  const [servicesOffered, setServicesOffered] = useState("");

  // Image upload
  const [uploadValidId, setValidId] = useState(null);
  const [previewId, setPreviewId] = useState(null);

  // Image Upload function
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setValidId(file);
    setPreviewId(URL.createObjectURL(file));
  };

  useEffect(() => {
    getPaginationApi(currentPage).then((res) => {
      setDoctors(res.data.doctors);
      setTotalPages(res.data.totalPages);
    });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Email validation
  const [emailValidationMessage, setEmailValidationMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailValidationMessage("Invalid email format.");
    } else {
      setEmailValidationMessage("");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  // Phone number validation
  const [validationMessage, setValidationMessage] = useState("");

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    if (!regex.test(number)) {
      setValidationMessage("Invalid phone number. Must be 10 digits.");
    } else {
      setValidationMessage("");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    validatePhoneNumber(number);
  };

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("qualification", qualification);
    formData.append("servicesOffered", servicesOffered);
    formData.append("uploadValidId", uploadValidId);
    formData.append("user", user);

    createDoctorApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // Close the modal after successful submission
          setIsModalOpen(false);
          // Reload or update the list of doctors
          getPaginationApi(currentPage).then((res) => {
            setDoctors(res.data.doctors);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  // Delete
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete doctor's information?"
    );
    if (!confirm) return;

    deleteDoctorApi(id).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        // Update the list after deletion
        setDoctors(doctors.filter((doctor) => doctor._id !== id));
      }
    });
  };

  return (
    <>
      <div className="flex ml-30">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl ml-36 font-semibold mb-4">Doctors</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center bg-gray-100 p-2 rounded">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2 ml-36" />
              <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 p-2 outline-none"
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              Add Doctor
            </button>
          </div>

          {/* Doctors Table */}
          <div >
            <table className=" ml-[7.5rem] bg-white w-full">
              <thead className=" bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">SN</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone Number</th>
                  <th className="py-2 px-4">Gender</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Qualification</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doctor, index) => (
                  <tr key={doctor._id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{doctor.fullName}</td>
                    <td className="py-2 px-4">{doctor.email}</td>
                    <td className="py-2 px-4">{doctor.phoneNumber}</td>
                    <td className="py-2 px-4">{doctor.gender}</td>
                    <td className="py-2 px-4">{doctor.address}</td>
                    <td className="py-2 px-4">{doctor.qualification}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <Link to={`/admin/view/${doctor._id}`} className="text-blue-500">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <Link to={`/admin/edit/${doctor._id}`} className="text-yellow-500">
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        onClick={() => handleDelete(doctor._id)}
                        className="text-red-500"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <button
              className={`px-3 py-1 border rounded-l-md ${currentPage <= 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              &laquo;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border ${currentPage === i + 1 ? "bg-gray-700 text-white" : "bg-gray-300"}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 border rounded-r-md ${currentPage >= totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Doctor</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={handleEmailChange}
        />
        {emailValidationMessage && (
          <div className="text-red-500 mb-2">{emailValidationMessage}</div>
        )}

        <label className="block mb-2">Phone Number</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {validationMessage && (
          <div className="text-red-500 mb-2">{validationMessage}</div>
        )}

        <label className="block mb-2">Gender</label>
        <select
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <label className="block mb-2">Address</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label className="block mb-2">City</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label className="block mb-2">State</label>
        <select
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>
          <option value="Province 1">Province 1</option>
          <option value="Province 2">Province 2</option>
          <option value="Bagmati Province">Bagmati Province</option>
          <option value="Gandaki Province">Gandaki Province</option>
          <option value="Lumbini Province">Lumbini Province</option>
          <option value="Karnali Province">Karnali Province</option>
          <option value="Sudurpashchim Province">Sudurpashchim Province</option>
        </select>

        <label className="block mb-2">Qualification/Specialization</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />

        <label className="block mb-2">Services Offered</label>
        <textarea
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={servicesOffered}
          onChange={(e) => setServicesOffered(e.target.value)}
        ></textarea>

        <label className="block mb-2">Profile Picture</label>
        <input
          type="file"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={handleImageUpload}
        />

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </>
  );
};

export default AdminDashboard;
