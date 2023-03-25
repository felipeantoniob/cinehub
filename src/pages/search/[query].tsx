import { useRouter } from "next/router";
import { useState } from "react";

import MoviePoster from "~/components/MoviePoster";
import MoviePosterPlaceholder from "~/components/MoviePosterPlaceholder";
import Navbar from "~/components/Navbar";
import Pagination from "~/components/Pagination";
import { api } from "~/utils/api";

const SearchResult = () => {
  const router = useRouter();
  const { query } = router.query;
  const [pageOffset, setPageOffset] = useState(0);
  const searchMoviesQuery = api.tmdb.searchMovies.useQuery(
    {
      query: query as string,
      pageOffset,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {searchMoviesQuery.isLoading || searchMoviesQuery.isFetching ? (
            <>
              {[...new Array(20).keys()].map((key) => (
                <MoviePosterPlaceholder key={key} />
              ))}
            </>
          ) : (
            <>
              {searchMoviesQuery.data?.results.map((movie) => (
                <MoviePoster key={movie.id} {...movie} />
              ))}
            </>
          )}
        </div>
        <div className="py-8">
          <Pagination
            pageOffset={pageOffset}
            setPageOffset={setPageOffset}
            isPreviousData={searchMoviesQuery.isPreviousData}
            totalPages={searchMoviesQuery.data?.total_pages ?? 0}
          />
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
