import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const user = localStorage.getItem("loginStudent");

  return (
    <>
      <div className=" w-full  h-20 flex justify-around items-center">
        <div>
          <img
            src="https://www.alemeno.com/static/assets/images/logo.png"
            alt=""
          />
        </div>
        <div className=" bg-blue-400 flex w-1/3 justify-around items-center h-2/3 rounded-lg">
          <div className=" cursor-pointer" onClick={() => navigate("/")}>
            Courses
          </div>

          <div className=" cursor-pointer" onClick={() => navigate("/student")}>
            Student
          </div>
        </div>
        <div className=" text-white flex flex-col relative">
          {user ? (
            <>
              <button onClick={() => setOpen(!open)}>{user}</button>
              <button
                hidden={open}
                className={`p-1 w-20 bg-red-400 rounded-lg `}
                onClick={() => localStorage.removeItem("loginStudent")}
              >
                Log Out
              </button>
            </>
          ) : (
            <button>Student Email</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
