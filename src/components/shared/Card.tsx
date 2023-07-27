import React from "react";
import { useInView } from "react-intersection-observer";

const Card = ({
  image,
  title,
  open,
  onClick,
  disable,
  delay,
}: {
  image: string;
  title: string;
  open: boolean;
  onClick: () => void;
  disable: boolean;
  delay: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <button
      ref={ref}
      className={`group h-20 sm:h-28 lg:h-36 w-full [perspective:1000px] transition duration-500 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }  ${
        disable || open
          ? "pointer-events-none touch-none"
          : "pointer-events-auto"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          open ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-secondary rounded-xl text-center text-tertiary text-6xl cursor-pointer`}
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            ?
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </button>
  );
};

export default Card;
