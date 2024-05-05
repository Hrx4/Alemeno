import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slice/course";
import singleCourse from "./slice/singleCourse";
import studentSlice from "./slice/student";
// import {courseSlice} from './slice/course'
const store = configureStore({
    reducer:{
        course : courseSlice.reducer,
        singleCourse : singleCourse,
        student : studentSlice.reducer
    }
})

export default store