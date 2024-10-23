import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const AllMovieList = () => {

    const nowPlaying=useSelector(store=>store?.movies?.nowPlaying)
    const popularMovies=useSelector(store=>store?.movies?.popular)
    const topRatedMovies=useSelector(store=>store?.movies?.topRated)
    const upComingovies=useSelector(store=>store?.movies?.upComing)

  
    
    
  return (
    nowPlaying && popularMovies && topRatedMovies && upComingovies ?(
        <div >
        <MovieList title={'Now Playing'} movies={nowPlaying}/>
        <MovieList title={'Popular'} movies={popularMovies}/>
        <MovieList title={'Top Rated'} movies={topRatedMovies}/>
        <MovieList title={'Up coming'} movies={upComingovies}/>
      </div>
    ):(null)
   
)
}

export default AllMovieList
