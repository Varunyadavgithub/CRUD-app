import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import the icons

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/user/getuser/${id}`
      );
      setInputData({
        name: res.data.name,
        email: res.data.email,
        password: res.data.password,
      });
    } catch (error) {
      setError("Failed to fetch user details. Please try again.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${API_BASE_URL}/user/update/${id}`,
        inputData
      );
      if (res.status === 200) {
        alert("User updated successfully!");
        navigate("/");
      }
    } catch (error) {
      setError("Failed to update user. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state for password visibility
  };

  return (
    <div className="p-4 md:w-1/2 mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update User
        </h1>
        {error && (
          <div className="text-sm text-red-500 mb-4 text-center">{error}</div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
            value={inputData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
            value={inputData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password type
            name="password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
            value={inputData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </div>
        <div className="flex justify-around mt-4">
          <Link
            to={`/`}
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
