import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [collasp, setCollasp] = useState("h-0 hidden");
  const handleCollasp = (e: any) => {
    e.preventDefault();
    // if(ref.current!==null)
    // ref.current.classList.add('expand')
    if (collasp === "expand") setCollasp("h-0 hidden");
    else setCollasp("expand");
  };
  const navigate = useNavigate()

  const state: any = useSelector((state) => state);

  useEffect(() => {
    if(state.singleCourse.data===null) navigate('/')

  })

  return (
    <>
      <div className="  w-2/3 h-[600px] m-auto  flex-col items-center justify-center text-white overflow-y-scroll">
        <div className=" text-4xl font-bold text-center">
          {state.singleCourse?.data?.name}
        </div>
        <div className=" w-full flex mt-10">
          <div className=" w-full mx-5">
            <img
              src={state.singleCourse?.data?.thumbnail}
              alt=""
              className=" h-full w-full object-cover overflow-hidden mr-3"
            />
          </div>
          <div className=" w-full">
            <div className=" text-lg font-semibold">
              {
                state.singleCourse?.data?.description
              }
            </div>
            <div>Instructor's Name - {state.singleCourse?.data?.instructor}</div>
            <div>Enrollment Status - {state.singleCourse?.data?.enrollmentStatus}</div>
            <div>
              Course Duration - {state.singleCourse?.data?.duration} <br />
              Schedule - {state.singleCourse?.data?.schedule},
              <br />
              Location - {state.singleCourse?.data?.location}
            </div>
            <div>
              Pre-Requsite -
              <ul>
                {
                  state.singleCourse?.data?.prerequisites?.map((item)=>(
                    <li>{item}</li>
                  ))
                }
                
              </ul>
            </div>
          </div>
        </div>
        <div className=" border rounded-lg m-5 items-center  flex-col">
          <div
            className=" text-center text-4xl mb-5 cursor-pointer"
            onClick={handleCollasp}
          >
            Syllabus{" "}
          </div>
          <div className=" h-0 bg-white w-full"></div>
          <div className={collasp}>
            {
              state.singleCourse?.data?.syllabus?.map((item)=>(
                <div className=" flex border">
              <div className=" text-xl">Week {item.week} -</div>
              <div>
                <div className=" text-xl font-bold">
                  {item.topic}
                </div>
                <div className=" italic font-medium">
                  {item.content}
                </div>
              </div>
            </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
