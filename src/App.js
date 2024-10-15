import { RouterProvider } from "react-router-dom";
import appRouter from "./Router/AppRouter";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { adduser, removeUser } from "./utils/slice/userSlice";
function App() {
  

  return <RouterProvider router={appRouter} />;
}

export default App;
