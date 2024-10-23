import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/slice/movieSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  // const {page}=useSelector(store=>store?.movies)
  const currentPage = useSelector((store) => store?.movies?.page);

  console.log("from popular", currentPage);
  useEffect(() => {
    const fetchPopulerMovies = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`,
          options
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopulerMovies();
  }, [dispatch, currentPage]);
};

export default useFetchPopularMovies;
