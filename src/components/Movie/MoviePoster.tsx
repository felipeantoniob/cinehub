import Image from 'next/image'
import { useState } from 'react'

import { POSTER_IMAGE_ENDPOINT } from '~/constants'
import { Movie as MoviePoster } from '~/types'
import { api } from '~/utils/api'
import { getActors } from '~/utils/getActors'
import { getDirectors } from '~/utils/getDirectors'
import MovieModal from './MovieModal'
import Spinner from '../Spinner'

const QUERY_OPTIONS = {
  refetchOnWindowFocus: false,
  enabled: false,
}

const MoviePoster = ({ ...movie }: MoviePoster) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loadingMovieId, setLoadingMovieId] = useState<number | null>(null)
  const movieDetailsQuery = api.tmdb.getMovieDetails.useQuery({ movieId: movie.id }, QUERY_OPTIONS)
  const movieCreditsQuery = api.tmdb.getMovieCredits.useQuery({ movieId: movie.id }, QUERY_OPTIONS)
  const movieTrailersQuery = api.tmdb.getMovieTrailers.useQuery(
    {
      movieId: movie.id,
    },
    QUERY_OPTIONS
  )

  const handlePosterClick = async (movieId: number) => {
    setLoadingMovieId(movieId)
    await Promise.allSettled([
      movieCreditsQuery.refetch(),
      movieDetailsQuery.refetch(),
      movieTrailersQuery.refetch(),
    ])
    setLoadingMovieId(null)
    setIsModalVisible(true)
  }

  return (
    <>
      <button
        onClick={() => void handlePosterClick(movie.id)}
        className="relative mx-auto aspect-[342/513] w-full rounded border border-gray-500 shadow transition hover:border-green-500"
      >
        <Image
          className="relative rounded"
          src={`${POSTER_IMAGE_ENDPOINT}${movie.poster_path ?? ''}`}
          alt={`${movie.title} poster`}
          width={342}
          height={513}
        />
        {loadingMovieId === movie.id && (
          <div className="absolute top-0 left-0 h-full w-full bg-black/50">
            <Spinner />
          </div>
        )}
      </button>
      {movieTrailersQuery.isSuccess &&
        movieDetailsQuery.isSuccess &&
        movieCreditsQuery.isSuccess && (
          <MovieModal
            movieDetails={movieDetailsQuery.data}
            isVisible={isModalVisible}
            handleClose={() => setIsModalVisible(false)}
            directors={getDirectors(movieCreditsQuery.data)}
            actors={getActors(movieCreditsQuery.data)}
            trailerId={movieTrailersQuery.data.results[0]?.key ?? null}
          />
        )}
    </>
  )
}

export default MoviePoster
