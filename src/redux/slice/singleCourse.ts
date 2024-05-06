import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const usersCollectionRef = collection(db, "courses");

export const fetchCourses = createAsyncThunk("fetchCourses" , async()=>{
    const response = await getDocs(usersCollectionRef);
    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
} )

const singleCourseSlice = createSlice({
    name: 'singleCourse',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    reducers: {
        currentCourse : (state , action)=>{
            state.data = action.payload
        }
    }
})

export const {currentCourse} = singleCourseSlice.actions

export default singleCourseSlice.reducer