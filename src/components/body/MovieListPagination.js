import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addPageNumber } from "../../utils/slice/movieSlice";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useFetchPopularMovies from "../../hooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../../hooks/useFetchUpcomingMovies";

const MovieListPagination = () => {
  useNowPlayingMovies()
  useFetchPopularMovies()
  useFetchTopRatedMovies()
  useFetchUpcomingMovies()
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const onPageChange = (page) => {
    dispatch(addPageNumber(page));
    setCurrentPage(page);
  };

  return (
    <div className=" text-white rounded-lg  flex overflow-x-auto sm:justify-center py-8">
        
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default MovieListPagination;
