import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import Employeedeshbord from "./components/Deshbord/Employeedeshbord";
import Admindeshbord from "./components/Deshbord/Admindeshbord";
import { Authcontext } from "./context/Authprovider";



const App = () => {
  const [user, setuser] = useState(null);

const data = useContext(Authcontext);







  const handlelogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setuser("admin");
    } else if (data[0] && data[0].find((e)=>e.email == email && e.password == password)) {
      setuser("employee");
    } else {
      alert("Invalid credentials");
    }
  };




  return <>

    {!user ? <Login handlelogin={handlelogin} /> : ""}

    {user === "admin" ? <Admindeshbord /> : <Employeedeshbord />}





  </>;
};

export default App;
