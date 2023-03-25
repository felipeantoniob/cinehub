import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { MovieListResponse } from "~/types";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY as string;
const API_ORIGIN = "https://api.themoviedb.org";

export const tmdbRouter = createTRPCRouter({
  getPopularMovies: publicProcedure
    .input(z.object({ pageOffset: z.number() }))
    .query(async ({ input }) => {
      const { pageOffset } = input;

      const POPULAR_MOVIES_PATHNAME = "/4/discover/movie";

      const params = new URLSearchParams({
        api_key: API_KEY,
        sort_by: "popularity.desc",
        page: (pageOffset + 1).toString(),
      }).toString();

      const endpoint = new URL(
        `${API_ORIGIN}${POPULAR_MOVIES_PATHNAME}?${params}`
      );
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const data = (await response.json()) as MovieListResponse;
      return data;
    }),
  searchMovies: publicProcedure
    .input(z.object({ pageOffset: z.number(), query: z.string().min(1) }))
    .query(async ({ input }) => {
      const { pageOffset, query } = input;

      const SEARCH_MOVIES_PATHNAME = "/3/search/movie";

      const params = new URLSearchParams({
        api_key: API_KEY,
        query,
        page: (pageOffset + 1).toString(),
      }).toString();

      const endpoint = new URL(
        `${API_ORIGIN}${SEARCH_MOVIES_PATHNAME}?${params}`
      );
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const data = (await response.json()) as MovieListResponse;
      return data;
    }),
});
