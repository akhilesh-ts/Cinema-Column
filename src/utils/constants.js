import { GrHomeRounded } from "react-icons/gr";
import { MdLocalMovies } from "react-icons/md";
import { MdUpcoming } from "react-icons/md";
import { TbDeviceTv } from "react-icons/tb";
import { LuClapperboard } from "react-icons/lu";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGRmNjg1OGVjZThiYzJhMGQwYWRjNjM3NTg1ZTNjMCIsIm5iZiI6MTcyODU3NzY3NS43OTg0NTUsInN1YiI6IjY0NjYwOTc4MzNhMzc2MDEzYjNjY2I0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9DD87xnQEcaxWEjMxtE1BWow1wd2AmPD87KcSlqSmk'
    }
  };


  export const NavigationData=[
    {
      id:1,
      name:'Home',
      icon:<GrHomeRounded/>,
      path:'/browse'
    },
    {
      id:2,
      name:'Movie',
      icon:<MdLocalMovies/>,
      path:'/browse/about'
    },
    {
      id:3,
      name:'Upcoming',
      icon:<MdUpcoming/>,
      path:'/upcoming'
    },
    {
      id:4,
      name:'Popular',
      icon:<LuClapperboard/>,
      path:'/popular'
    },
    {
      id:5,
      name:'TopRated',
      icon:<TbDeviceTv/>,
      path:'/toprated'
    },


  ]

