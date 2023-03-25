import Image from "next/image";

import { POSTER_IMAGE_ENDPOINT } from "~/constants";
import { Movie as MoviePoster } from "~/types";

const MoviePoster = ({ ...movie }: MoviePoster) => {
  return (
    <>
      <button
        onClick={() => null}
        className="relative mx-auto aspect-[342/513] rounded border border-gray-500 shadow transition hover:border-green-500"
      >
        <Image
          className="relative rounded"
          src={`${POSTER_IMAGE_ENDPOINT}${movie.poster_path ?? ""}`}
          alt={`${movie.title} poster`}
          width={342}
          height={513}
        />
      </button>
    </>
  );
};

export default MoviePoster;
