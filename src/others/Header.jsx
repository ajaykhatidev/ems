import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1>
        Hello <br /> <span className="text-3xl">Ajay ✌</span> 
      </h1>

      <button className="bg-red-500 p-4 mt-2 rounded-2xl">Logout</button>
    </div>
  );
};

export default Header;
