import SearchBar from "../components/body/SearchBar";
import MovieSuggestionList from "../components/body/MovieSuggestionList";

const Search = () => {
  return (
    <div className="w-full ">
      <div className="lg:w-10/12  mx-auto">
        <SearchBar />
        <MovieSuggestionList />
      </div>
    </div>
  );
};

export default Search;
