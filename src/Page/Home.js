import React from "react";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerCarousel from "../components/body/BannerCarousel";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import AllMovieList from "../components/body/AllMovieList";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";


const Home = () => {
  useNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies()
  useFetchUpcomingMovies()

  return (
    <>
      <BannerCarousel />

      <div className="p-6">
        <AllMovieList />
      </div>
      
    </>
  );
};

export default Home;
