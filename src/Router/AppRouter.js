
import Login from "../Page/Login";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../Page/Home";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<AppLayout/>,
        children:[
            {
                path:'/browse',
                element:<Home/>
            },
            
        ]
    }
])

export default appRouter