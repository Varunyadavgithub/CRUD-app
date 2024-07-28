import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ReadUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/user/getuser/${id}`
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
    <>
      <div className="p-4 md:w-full mx-auto mt-3">
        <div className="relative overflow-x-auto shadow-md rounded-md">
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
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">{userData.name}</td>
                <td className="px-6 py-4">{userData.email}</td>
                <td className="px-6 py-4">{userData.password}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 justify-center">
                    <Link
                      to={`/`}
                      className="font-medium text-green-600 hover:underline"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/`}
                      className="font-medium text-yellow-400 hover:underline"
                    >
                      Edit
                    </Link>
                    <button className="font-medium text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadUser;
