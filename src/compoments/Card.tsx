import type { FC } from "react";

type CardProps = {
  imgae: string;
  movieName: string;
  episode: string;
};

const Card: FC<CardProps> = ({ imgae, movieName, episode }) => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500">
      <img
        className="w-full object-cover mask-b-from-30% mask-b-to-99%"
        src={`/images/${imgae}`}
        alt={movieName}
      />

      <div className="absolute left-1/2 bottom-13 -translate-x-1/2 flex flex-col items-center justify-center w-full">
        <span className="text-white drop-shadow-md text-[16px] font-normal">
          Episode {episode}
        </span>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center w-full">
        <span className="text-white drop-shadow-md text-[16px] font-bold text-center">
          {movieName}
        </span>
      </div>
    </div>
  );
};
export default Card;
