import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentLogOut } from "../redux/slice/student";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

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
          {state.student.currentUser ? (
            <>
              <button onClick={() => setOpen(!open)}>{state.student.currentUser}</button>
              <button
                hidden={open}
                className={`p-1 w-20 bg-red-400 rounded-lg `}
                onClick={() => {
                dispatch(studentLogOut())  
                }}
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
