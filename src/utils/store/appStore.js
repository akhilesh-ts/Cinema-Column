import { configureStore } from "@reduxjs/toolkit";
import UserSlice from '../slice/userSlice.js'
import movieSlice from '../slice/movieSlice.js'
import groqSlice from '../slice/groqSlice.js'

const appStore=configureStore({
  reducer:{
    userData:UserSlice,
    movies:movieSlice,
    groq:groqSlice
  
  }
})

export default appStore