import { Dialog } from "@headlessui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Image from "next/image";
import Link from "next/link";

import { BACKDROP_IMAGE_ENDPOINT } from "~/constants";
import type { MovieDetails } from "~/types";
import type { Actors } from "~/utils/getActors";
import type { Directors } from "~/utils/getDirectors";
import ActorsCarousel from "./ActorsCarousel";
import Modal from "./Modal";

dayjs.extend(duration);

const CloseButton = ({ handleClose }: { handleClose: () => void }) => (
  <button
    className="min-h-8 absolute right-2 top-2 z-10 h-8 cursor-pointer rounded-full px-3 text-sm text-slate-100 focus-visible:outline-none"
    onClick={handleClose}
  >
    ✕
  </button>
);

type MovieModalProps = {
  movieDetails: MovieDetails;
  isVisible: boolean;
  handleClose: () => void;
  directors: Directors[];
  actors: Actors[];
  trailerId: string | null;
};

const MovieModal = ({
  actors,
  directors,
  handleClose,
  movieDetails,
  isVisible,
  trailerId,
}: MovieModalProps) => {
  return (
    <Modal isVisible={isVisible} handleClose={handleClose}>
      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-slate-900 text-left align-middle shadow-xl  transition-all sm:my-8 sm:mx-4 sm:rounded-lg">
        <CloseButton handleClose={handleClose} />
        <Dialog.Title className="relative flex h-32 items-center justify-center">
          <Link
            href={`/movie/${movieDetails.id}`}
            className="text-center text-xl text-slate-100"
          >
            {movieDetails.title}
            {movieDetails.release_date && (
              <span>
                &nbsp;(
                {dayjs(movieDetails.release_date, "YYYY-MM-DD").format("YYYY")})
              </span>
            )}
          </Link>
          {movieDetails.backdrop_path && (
            <Image
              src={BACKDROP_IMAGE_ENDPOINT + movieDetails.backdrop_path}
              alt={movieDetails.original_title}
              fill
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
            />
          )}
        </Dialog.Title>
        <div className="p-6">
          {movieDetails.overview && (
            <div className="mb-4">
              <h3 className="text-md mb-2 text-slate-400">Overview</h3>
              <p className="text-sm text-slate-200"> {movieDetails.overview}</p>
            </div>
          )}
          <div className="flex">
            {directors.length > 0 && (
              <div className="mb-4 flex-1">
                <h3 className="text-md mb-2 text-slate-400">Directed by</h3>
                {directors.map((director, index) => (
                  <div key={index} className="director-name">
                    <a
                      href={`https://www.themoviedb.org/person/${director.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mb-2 text-sm text-slate-200 hover:text-slate-400 focus-visible:outline-none"
                    >
                      {director.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
            {movieDetails.release_date && (
              <div className="mb-4 flex-1">
                <h3 className="text-md mb-2 text-slate-400">Release Date</h3>
                <p className="text-sm text-slate-200">
                  {dayjs(movieDetails.release_date, "YYYY-MM-DD").format(
                    "MMMM D, YYYY"
                  )}
                </p>
              </div>
            )}
          </div>
          <div className="flex">
            {movieDetails.genres.length > 0 && (
              <div className="mb-4 flex-1">
                <h3 className="text-md mb-2 text-slate-400">Genres</h3>
                <p className="mb-2 text-sm text-slate-200">
                  {movieDetails?.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            )}
            {movieDetails.runtime > 0 && (
              <div className="mb-4 flex-1">
                <h3 className="text-md mb-2 text-slate-400">Runtime</h3>
                <p className="mb-2 text-sm text-slate-200">
                  {dayjs
                    .duration(movieDetails.runtime, "minutes")
                    .format("H[h] mm[m]")}
                </p>
              </div>
            )}
          </div>
          <ActorsCarousel actors={actors} />
        </div>
        {trailerId && (
          <iframe
            src={"https://www.youtube.com/embed/" + trailerId + "?rel=0"}
            title="YouTube video"
            allowFullScreen
            className="aspect-video w-full focus-visible:outline-none"
          />
        )}
      </Dialog.Panel>
    </Modal>
  );
};

export default MovieModal;
