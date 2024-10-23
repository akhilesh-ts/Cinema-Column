import { GrHomeRounded } from "react-icons/gr";
import { MdLocalMovies } from "react-icons/md";
import { MdUpcoming } from "react-icons/md";
import { TbDeviceTv } from "react-icons/tb";
import { LuClapperboard } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w300/";

export const GROQ_CLOUD = process.env.REACT_APP_GROQ_API_KEY
  

export const AI_DESCRIPTION =" Let AI be your guide to the perfect movie night—discover films tailored to your taste, from hidden gems to blockbuster hits, all with the power of intelligent recommendations. Simply ask:"
            
              
export const EX_PROMPT="What are some feel-good movies with a strong female lead?"              

export const NavigationData = [
  {
    id: 'search',
    name: "AISearch",
    icon: <IoIosSearch />,
    path: "/browse/search",
  },
  {
    id: '',
    name: "Home",
    icon: <GrHomeRounded />,
    path: "/browse",
  },
  {
    id: 'nowPlaying',
    name: "NowPlaying",
    icon: <MdLocalMovies />,
    path:'/browse/:name',
  },
  {
    id: 'upComing',
    name: "Upcoming",
    icon: <MdUpcoming />,
    path:'/browse/:name',
  },
  {
    id: 'popular',
    name: "Popular",
    icon: <LuClapperboard />,
    path: '/browse/:name',
  },
  {
    id: 'topRated',
    name: "TopRated",
    icon: <TbDeviceTv />,
    path: '/browse/:name',
  },
];


export const SKELETON_ICON=(
  <div
      
          role="status"
          className="flex items-center justify-center h-full  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
        </div>
)