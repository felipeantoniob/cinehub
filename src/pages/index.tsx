import { type NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import MoviePoster from '~/components/Movie/MoviePoster'
import MoviePosterPlaceholder from '~/components/Movie/MoviePosterPlaceholder'
import Navbar from '~/components/Navbar'
import Pagination from '~/components/Pagination'
import { api } from '~/utils/api'

const Home: NextPage = () => {
  const [pageOffset, setPageOffset] = useState(0)
  const popularMoviesQuery = api.tmdb.getPopularMovies.useQuery(
    {
      pageOffset,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  return (
    <>
      <Head>
        <title>Cinehub</title>
        <meta
          name="description"
          content="Discover and explore your favorite movies with Cinehub, a website that uses the TMDB API to retrieve data on movies. Search, view details, and enjoy a smooth user experience with pagination, error handling, and responsive design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-slate-900 text-white">
        <Navbar />
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {popularMoviesQuery.isLoading || popularMoviesQuery.isFetching ? (
              <>
                {[...new Array(20).keys()].map((key) => (
                  <MoviePosterPlaceholder key={key} />
                ))}
              </>
            ) : (
              <>
                {popularMoviesQuery.data?.results.map((movie) => (
                  <MoviePoster key={movie.id} {...movie} />
                ))}
              </>
            )}
          </div>
          <div className="py-8">
            <Pagination
              pageOffset={pageOffset}
              setPageOffset={setPageOffset}
              isPreviousData={popularMoviesQuery.isPreviousData}
              totalPages={popularMoviesQuery.data?.total_pages ?? 0}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
