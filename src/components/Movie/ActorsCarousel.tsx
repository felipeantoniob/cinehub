import Image from 'next/image'
import { PROFILE_IMAGE_ENDPOINT } from '../../constants/index'
import type { Actors } from '../../utils/getActors'

type ActorsCarouselProps = {
  actors: Actors[]
}

const ActorsCarousel = ({ actors }: ActorsCarouselProps) => {
  return (
    <div className="flex flex-nowrap justify-items-center gap-4 overflow-x-scroll">
      {actors.slice(0, 10).map((actor, index) => (
        <div key={index} className="mb-4 w-[84px] shrink-0">
          <Image
            src={actor.profilePath ? PROFILE_IMAGE_ENDPOINT + actor.profilePath : ''}
            alt={actor.name}
            width={84}
            height={126}
          />
          <h4 className="truncate text-xs text-slate-400">
            <a href={`https://www.themoviedb.org/person/${actor.id}`}>{actor.name}</a>
          </h4>
          <h4 className="truncate text-xs text-slate-200">{actor.character}</h4>
        </div>
      ))}
    </div>
  )
}

export default ActorsCarousel
