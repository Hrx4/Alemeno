import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name: 'student',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    reducers: {
        handleCheck : (state :any , action)=>{
                const {week , course } = action.payload;
            state.data[course].syllabus[week].complete = true;
            let total =0;
            state.data[course].syllabus.map((syllabus : any)=>{
                if(syllabus.complete) total+=1;
            })
            state.data[course].proggress = (total*100) / state.data[course].syllabus.length
            
        },
        handleUnCheck : (state :any , action)=>{
            const {week , course } = action.payload;
            state.data[course].syllabus[week].complete = false;
            let total =0;
            state.data[course].syllabus.map((syllabus :any)=>{
                if(syllabus.complete) total+=1;
            })
            state.data[course].proggress = (total*100) / state.data[course].syllabus.length
        },
        fetchStudent : (state , action)=>{
            const {email , courses} = action.payload;
           state.data =  courses.filter((item:any) =>  
                item.students.some((course :any) => course.email === email)
              );
        }
    }
})

export const {handleCheck , fetchStudent , handleUnCheck} = studentSlice.actions



export default studentSlice