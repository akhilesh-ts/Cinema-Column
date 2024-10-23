// import { options } from "../utils/constants";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNowPlayingMovies } from "../utils/slice/movieSlice";

// const useNowPlayingMovies = () => {
//   const currentPage=useSelector(store => store?.movies?.page)
//   const dispatch = useDispatch();
  

//   useEffect(() => {
//     const fetchNowPlayingMovie = async () => {
//       const data = await fetch(
//         `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
//         options
//       );
  
//       const json = await data.json();
  
//       dispatch(addNowPlayingMovies(json.results));
//     };
//     fetchNowPlayingMovie()
//   }, [dispatch,currentPage]);

 
// };

// export default useNowPlayingMovies;


import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/slice/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const currentPage=useSelector(store => store?.movies?.page)
  
  console.log(currentPage);
  

  useEffect(() => {
    const fetchNowPlayingMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
          options
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };

    fetchNowPlayingMovie();
  }, [dispatch,currentPage]);  
};

export default useNowPlayingMovies;
