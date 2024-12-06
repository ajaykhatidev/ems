
import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(email,password);
    setemail("") 
    setpassword("")
    
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border-2 boder-red-600 flex flex-col h-screen w-screen justify-center items-center rounded-lg">
        <h1 className="text-3xl mb-5 font-bold">Log in</h1>
        <div className="w-1/2  ">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <input
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="p-2 text-black rounded-lg outline-none"
              type="email"
              placeholder="email"
            />
            <input
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="p-2 text-black rounded-lg outline-none"
              type="password"
              placeholder="password"
            />
            <button className="bg-red-600 rounded-lg p-2">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
