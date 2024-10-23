import { createSlice } from "@reduxjs/toolkit";

const groqSlice=createSlice({
    name:'groq_movie',
    initialState:{
        searchInput:null,
        movieNames:null,
        movieList:null
        
    },
    reducers:{
        addMoviesAndSearchVal:(state,action)=>{
            const {searchVal,movies,finalResult}=action.payload
            state.searchInput=searchVal
            state.movieNames=movies
            state.movieList=finalResult
            
        }
    }
})

export const {addMoviesAndSearchVal}=groqSlice.actions
export default groqSlice.reducer