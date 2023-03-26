import type { MovieCredits } from '~/types'

export interface Directors {
  name: string
  id: number
}

export const getDirectors = (movieCredits: MovieCredits) => {
  return movieCredits.crew
    .filter((crew) => crew.job === 'Director')
    .map((crew) => {
      return {
        name: crew.name,
        id: crew.id,
      }
    })
}
