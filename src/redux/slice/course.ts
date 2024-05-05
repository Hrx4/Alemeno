import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const usersCollectionRef = collection(db, "courses");

export const fetchCourses = createAsyncThunk("fetchCourses" , async()=>{
    const response = await getDocs(usersCollectionRef);
    return response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }})
} )

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCourses.fulfilled, (state :any, action) => {
            state.data = action.payload;
            // localStorage.setItem({

            // })
            state.isLoading = false;
        });
        builder.addCase(fetchCourses.rejected, (state, action) => {
            console.log("Error", action);
            state.isError = true;
        });
    },
    reducers: {}
})

export default courseSlice