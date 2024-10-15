import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          state.nowPlaying=action.payload
        }
    }
})

export const {addNowPlayingMovies}=movieSlice.actions
export default movieSlice.reducer