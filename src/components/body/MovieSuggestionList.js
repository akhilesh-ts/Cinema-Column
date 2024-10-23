import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { useSelector } from "react-redux";
import { AI_DESCRIPTION, EX_PROMPT } from "../../utils/constants";
import MovieList from "./MovieList";
const MovieSuggestionList = () => {
  const { searchInput,movieNames,movieList } = useSelector((store) => store?.groq);



  return (
    <>
      {!searchInput ? (
        <div className="w-full mx-auto">
          <div className="w-full h-[50vh] lg:h-[70vh] flex items-center justify-center flex-col  ">
            <SiGooglegemini className=" text-4xl text-ita animate-spin-slow text-hoverBlue" />
            <p className="text-white italic text-center font-thin ">
              {AI_DESCRIPTION}{" "}
              <span className="text-hoverBlue font-semibold">{EX_PROMPT}</span>
            </p>
          </div>
        </div>
      ) : null}
      {searchInput && (
        <h1 className="text-white mt-10">
          Result for <span className="text-hoverBlue ">{searchInput}</span>...
        </h1>
      )}
{
  movieNames && movieNames.map((item,index)=>(
    <MovieList
    key={item}
    title={item}
    movies={movieList[index].results}
    />
    
  ))
}
     
    </>
  );
};

export default MovieSuggestionList;
