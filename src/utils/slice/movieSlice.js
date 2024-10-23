import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        upComing:null,
        page:1
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          state.nowPlaying=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popular=action.payload
        },
        addTopRatedMovies:(state,action)=>{
           state.topRated=action.payload
        },
        addUpcomingMovies:(state,action)=>{
          state.upComing=action.payload
        },
        addPageNumber:(state,action)=>{
          state.page=action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addPageNumber}=movieSlice.actions
export default movieSlice.reducer