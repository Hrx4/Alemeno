import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentCourse } from "../redux/slice/singleCourse";
import {
  fetchStudent,
  handleCheck,
  handleUnCheck,
} from "../redux/slice/student";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Student = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);
  console.log("====================================");
  console.log(state);
  console.log("====================================");
  const [currentUser, setCurrentUser] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // localStorage.setItem("loginStudent", currentUser);
    dispatch(fetchStudent({ email: currentUser, courses: state.course.data }));
  };

  useEffect(() => {
    if (state.student.data === null) {
      dispatch(
        fetchStudent({
          email: localStorage.getItem("loginStudent"),
          courses: state.course.data,
        })
      );
    }
  }, []);

  if (state.student.isLoading) {
    return (
      <div className=" text-white font-extrabold text-4xl text-center">
        Loading....
      </div>
    );
  }

  return (
    <>
      {state.student.currentUser ? (
        <div className="  h-3/4  m-10 overflow-y-scroll">
          {state.student.data?.map((item: any, index: Number) => (
            <div
              className=" bg-blue-200 gap-2  min-h-[230px] w-3/4 mx-auto my-4 flex rounded-md overflow-hidden cursor-pointer"
              onClick={() => dispatch(currentCourse(item))}
            >
              <div className="">
                <img
                  src={item.thumbnail}
                  alt=""
                  className=" h-[250px] object-cover overflow-hidden mr-3"
                />
                <div className=" h-40 w-40 mx-auto my-3">
                  <CircularProgressbar
                    value={item.proggress}
                    text={`${parseInt(item.proggress)}%`}
                  />
                </div>
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-4xl font-bold">{item.name}</h1>

                <div className=" text-base font-normal italic">
                  instructor: {item.instructor}
                </div>

                <div className=" border rounded-lg m-5 items-center  flex-col">
                  <div className=" text-center text-4xl mb-5 cursor-pointer">
                    Syllabus{" "}
                  </div>
                  <div className=" h-0 bg-white w-full"></div>
                  <div>
                    {item.syllabus?.map((topic: any, ind: Number) => (
                      <div className=" flex border">
                        <div className=" text-xl">Week {topic.week} -</div>
                        <div>
                          <div className=" text-xl font-bold">
                            {topic.topic}
                          </div>
                          <div className=" italic font-medium">
                            {topic.content}
                          </div>
                          <input
                            type="checkbox"
                            checked={topic.complete}
                            onClick={() => {
                              topic.complete
                                ? dispatch(
                                    handleUnCheck({ week: ind, course: index })
                                  )
                                : dispatch(
                                    handleCheck({ week: ind, course: index })
                                  );
                              // proggressBar(item.syllabus)
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" text-center flex justify-center items-center mt-10">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
          />
          <button
            className=" text-white p-2 ml-3 rounded-lg border"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default Student;
