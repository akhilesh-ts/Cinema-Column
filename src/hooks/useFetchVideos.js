import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const FetchVideos = (id) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    Videos(id);
  }, []);

  const Videos = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US'`,
      options
    );

    const json = await data.json();

    const results = json?.results.filter((item) => item.type === "Trailer");

    setTrailer(results);
  };

  return trailer;
};

export default FetchVideos;
