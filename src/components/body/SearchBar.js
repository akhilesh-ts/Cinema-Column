import React, { useRef, useState } from "react";
import groq from "../../utils/groqAI";
import { useDispatch } from "react-redux";
import { addMoviesAndSearchVal } from "../../utils/slice/groqSlice";
import { ThreeDot } from "react-loading-indicators";
import { options } from "../../utils/constants";

const SearchBar = () => {
  const searchResult = useRef(null);
  const dispatch = useDispatch();
  // const [buttonClicked, setButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const FetchMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );

    const json = await data.json();

    return json;
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const searchVal = searchResult.current.value;
    // setButtonClicked((prev) => !prev);
    setIsLoading(true);

    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the querry : " +
      searchVal +
      "only give me names of 5 movies, comma seperated like the example result given ahead.Do not include any additional text, explanations, or introductions. Example Result:Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const prompt="Act as a movie recommendation system. I want only the names of 5 movies, comma-separated. Do not include any additional text, explanations, or introductions. For example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. My query is:"+{searchVal}

    const movieResult = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });
    const movies = movieResult.choices[0]?.message?.content.split(",");

    const movieNames = movies.map((item) => FetchMovies(item));

    const finalResult = await Promise.all(movieNames);

    dispatch(addMoviesAndSearchVal({ searchVal, movies, finalResult }));
    setIsLoading(false);
  };

  return (
    <form
      className="p-2 md:flex w-full gap-2"
      onSubmit={(e) => handelSubmit(e)}
    >
      <input
        ref={searchResult}
        type="search"
        placeholder="What would like to watch today ?..."
        className=" w-full   rounded-lg"
      />
      <button
        type="submit"
        className="bg-hoverBlue  text-white py-2 px-5 md:p-0  mt-2 md:mt-0 w-full  md:w-1/12  rounded-lg"
      >
        {isLoading ? (
          <ThreeDot
            variant="pulsate"
            color="#ffffff"
            size="medium"
            text=""
            textColor=""
          />
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
};

export default SearchBar;
