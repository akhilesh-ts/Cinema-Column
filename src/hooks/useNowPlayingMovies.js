import { options } from "../utils/constants";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slice/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch=useDispatch()

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  const fetchNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results))
    
  };

};

export default useNowPlayingMovies;
