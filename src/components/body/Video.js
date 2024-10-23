import React from "react";
import { useParams } from "react-router-dom";

import useFetchVideos from "../../hooks/useFetchVideos";

const Video = () => {
  const { id } = useParams();

  const trailer = useFetchVideos(id);

  return (
    trailer && (
      <div className="w-full p-2 lg:p-6 h-auto ">
        <iframe
          className="w-full  lg:h-[80vh] rounded-lg"
          src={`https://www.youtube.com/embed/${trailer[0]?.key}?si=Mg89xk8x61f_ET7n`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    )
  );
};

export default Video;
