import { configureStore } from "@reduxjs/toolkit";
import UserSlice from '../slice/userSlice.js'
import movieSlice from '../slice/movieSlice.js'

const appStore=configureStore({
  reducer:{
    userData:UserSlice,
    movies:movieSlice
  }
})

export default appStore