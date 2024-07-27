import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [userData, setUserData] = useState([]);
  // console.log(userData);
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/user/getallusers"
        );
        // console.log(res.data)
        setUserData(res.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUser();
  }, []);

  return (
    <>
      <div className="p-4 md:w-1/2 mx-auto mt-3">
        <form>
          <h1 className="flex justify-center items-center text-black text-3xl font-semibold my-3">
            CRUD App
          </h1>
          <div>
            <label className="text-sm text-gray-500">Name:</label>
            <input
              type="text"
              name="name"
              className="block py-2.5 px-3 w-full text-sm text-gray-100 bg-transparent border-2 border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Email:</label>
            <input
              type="email"
              name="email"
              className="block py-2.5 px-3 w-full text-sm text-gray-100 bg-transparent border-2 border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Password:</label>
            <input
              type="password"
              name="password"
              className="block py-2.5 px-3 w-full text-sm text-gray-100 bg-transparent border-2 border-gray-300 rounded-md"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-700 rounded-md"
            >
              Add User
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-lg text-center text-gray-500">
            <thead className="text-[17px] text-black uppercase bg-gray-500">
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
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((user, idx) => (
                  <tr
                    key={idx}
                    className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {idx + 1}
                    </th>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.password}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4 justify-center">
                        <Link
                          to={`/`}
                          className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                        >
                          Read
                        </Link>
                        <Link
                          to={`/`}
                          className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                        <button className="font-medium text-red-500 hover:underline">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
