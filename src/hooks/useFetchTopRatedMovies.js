import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/slice/movieSlice";
import { options } from "../utils/constants";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store?.movies?.page);
  useEffect(() => {
    const TopRatedMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`,
          options
        );

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
      } catch (error) {
        console.log(error);
      }
    };

    TopRatedMovie();
  }, [dispatch, currentPage]);
};
export default useFetchTopRatedMovies;
