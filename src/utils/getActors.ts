import type { MovieCredits } from "~/types";

export interface Actors {
  name: string;
  profilePath: string | null;
  character: string;
  id: number;
}

export const getActors = (movieCredits: MovieCredits) => {
  return movieCredits.cast
    .filter((cast) => cast.known_for_department === "Acting")
    .map((cast) => {
      return {
        name: cast.name,
        character: cast.character,
        profilePath: cast.profile_path,
        id: cast.id,
      };
    });
};
