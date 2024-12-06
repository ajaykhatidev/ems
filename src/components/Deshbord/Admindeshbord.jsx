import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/Createtask";
import AllTask from "../../others/AddTask";

const Admindeshbord = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <CreateTask/>
      <AllTask/>

      
    </div>
  );
};

export default Admindeshbord;
