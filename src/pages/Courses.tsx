import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/slice/course";
import { currentCourse } from "../redux/slice/singleCourse";
import { useNavigate } from "react-router-dom";
// import { fetchCourses } from ";
const Courses = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.course.data === null) dispatch(fetchCourses());
  }, []);

  if (state.course.isLoading) {
    return (
      <div className=" text-white font-extrabold text-4xl text-center">
        Loading....
      </div>
    );
  }

  return (
    <>
      <div className="  h-3/4  m-10 overflow-y-scroll">
        {state.course.data?.map((item: any) => (
          <div
            className=" bg-blue-200 h-[230px] w-3/4 mx-auto my-4  flex rounded-md overflow-hidden cursor-pointer"
            onClick={(e) => {
              dispatch(currentCourse(item));
              navigate(`/course/${item.name}`);
            }}
          >
            <div className="">
              <img
                src={item.thumbnail}
                alt=""
                className=" h-full object-cover overflow-hidden mr-3"
              />
            </div>
            <div className=" flex flex-col">
              <h1 className=" text-4xl font-bold">{item.name}</h1>
              <span className=" text-lg font-semibold">
                {item.description}
              </span>
              <div className=" text-lg font-semibold">
                duration: {item.duration} <br />
                schedule: {item.schedule} <br />
                location: {item.location}
              </div>
              <div className=" text-base font-normal italic">
                instructor: {item.instructor}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
