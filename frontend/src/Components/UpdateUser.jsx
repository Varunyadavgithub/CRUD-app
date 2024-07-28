import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    name: "",
    eamil: "",
    password: "",
  });

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/user/getuser/${id}`
      );
      setInputData({
        name: res.data.name,
        email: res.data.email,
        password: res.data.password,
      });
    } catch (error) {
      console.log(error);
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
        `http://localhost:3000/api/v1/user/update/${id}`,
        inputData
      );
      if(res.status==200){
        window.location=('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 md:w-1/2 mx-auto mt-3">
        <form onSubmit={handleSubmit}>
          <h1 className="flex justify-center items-center text-black text-3xl font-semibold my-3">
            Update User
          </h1>
          <div>
            <label className="text-sm text-black font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              className="block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-black rounded-md"
              placeholder="Enter your name"
              required
              value={inputData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm text-black font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              className="block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-black rounded-md"
              placeholder="Enter your email"
              required
              value={inputData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm text-black font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              className="block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-black rounded-md"
              placeholder="Enter your Password"
              required
              value={inputData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-700 rounded-md"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
