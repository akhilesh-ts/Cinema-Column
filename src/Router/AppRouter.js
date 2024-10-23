
import Login from "../Page/Login";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../Page/Home";
import Search from "../Page/Search";
import Video from "../components/body/Video";
import FeatuedMovies from "../Page/FeatuedMovies";




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
            {
                path:'/browse/search',
                element:<Search/>
            },
            {
                path:'/browse/watch/:name/:id',
                element:<Video/>
            },
            {
                path:'/browse/:name',
                element:<FeatuedMovies/>
            }
            
            
            
        ]
    }
])

export default appRouter