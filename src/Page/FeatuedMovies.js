import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Shimmer from "../components/body/Shimmer";
import Card from "../components/body/Card";
import MovieListPagination from "../components/body/MovieListPagination";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const FeatuedMovies = () => {
  const { name } = useParams();
  const movies = useSelector((store) => store?.movies[name]);
  // useNowPlayingMovies()
  if (!movies) return <Shimmer />;

 



  return (
    movies && (
      <>
        <div className="text-white p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          {movies.map((item) => (
            <Link
              key={item?.id}
              to={`/browse/watch/${item?.original_title}/${item?.id}`}
            >
              {item?.poster_path && <Card poster={item?.poster_path} />}
            </Link>
          ))}
        </div>
        <MovieListPagination />
      </>
    )
  );
};

export default FeatuedMovies;
