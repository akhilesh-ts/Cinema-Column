import { Link } from "react-router-dom";
import Card from "./Card";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <h1 className="font-bold text-2xl text-white mt-10 mb-4 ">{title}</h1>
      <div
        className={`flex gap-2 lg:gap-4 max-w-full ${
          movies.length > 5 && "overflow-x-scroll"
        } whitespace-nowrap `}
      >
        {movies.map((item) => (
          <Link
            key={item?.id}
            to={`/browse/watch/${item?.original_title}/${item?.id}`}
          >
            {item?.poster_path && (
              <Card  poster={item?.poster_path} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MovieList;
