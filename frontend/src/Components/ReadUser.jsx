import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ReadUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/user/getuser/${id}`
      );
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto mt-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        User Details
      </h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-base text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">SN</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 font-medium text-gray-800">1</td>
              <td className="px-6 py-4">{userData.name || "N/A"}</td>
              <td className="px-6 py-4">{userData.email || "N/A"}</td>
              <td className="px-6 py-4">********</td>
              <td className="px-6 py-4">
                <Link
                  to={`/`}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600"
                >
                  Go Back
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadUser;
