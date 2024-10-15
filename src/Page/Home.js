import React from "react";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerCarousel from "../components/BannerCarousel";


const Home = () => {
  useNowPlayingMovies();

  return (
    <>
    <BannerCarousel/>
    </>
  );
};

export default Home;
