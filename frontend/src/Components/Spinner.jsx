import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-700"
          role="status"
        >
        </div>
      </div>
    </>
  );
};

export default Spinner;
