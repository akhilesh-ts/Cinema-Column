
import Login from "../Page/Login";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../Page/Home";
import About from '../Page/About'


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