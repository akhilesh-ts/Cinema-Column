import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/slice/movieSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store?.movies?.page);
  useEffect(() => {
    const UpcomingMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currentPage}`,
          options
        );

        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.log(error);
      }
    };
    UpcomingMovie();
  }, [dispatch, currentPage]);
};

export default useFetchUpcomingMovies;
