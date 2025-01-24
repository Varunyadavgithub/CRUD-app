import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Home() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const fetchAllUser = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/user/getallusers`);
      setUserData(res.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUser();
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
      setLoading(true);
      const res = await axios.post(
        `${API_BASE_URL}/user/createuser`,
        inputData
      );
      setLoading(false);
      if (res.status === 200) {
        fetchAllUser();
        setInputData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
    fetchAllUser();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        const res = await axios.delete(`${API_BASE_URL}/user/delete/${id}`);
        if (res.status === 200) {
          fetchAllUser();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="p-6 md:w-3/4 lg:w-1/2 mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="flex justify-center items-center text-blue-700 text-4xl font-bold mb-6">
            CRUD App
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
              value={inputData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
              value={inputData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Password:
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
              value={inputData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-2/3 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-md"
            >
              {loading ? "Adding..." : "Add User"}
            </button>
          </div>
        </form>

        {loading ? (
          <Spinner />
        ) : (
          <div className="relative overflow-x-auto shadow-md mt-8 rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-white uppercase bg-blue-600">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SN.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 ? (
                  userData.map((user, idx) => (
                    <tr
                      key={idx}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        {idx + 1}
                      </th>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">********</td>
                      <td className="px-6 py-4 flex gap-4">
                        <Link
                          to={`/readuser/${user._id}`}
                          className="text-green-600 hover:underline"
                        >
                          Read
                        </Link>
                        <Link
                          to={`/updateuser/${user._id}`}
                          className="text-yellow-500 hover:underline"
                        >
                          Edit
                        </Link>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-700"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
