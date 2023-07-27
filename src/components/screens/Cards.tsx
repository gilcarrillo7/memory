import React, { useCallback } from "react";
import {
  selectCards,
  selectSecondCard,
  openCard,
} from "../../features/memory/memorySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Card from "../shared/Card";

const Cards = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  const secondCard = useAppSelector(selectSecondCard);

  const handleCardClick = useCallback((i: number) => dispatch(openCard(i)), []);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4 pt-20 sm:pt-28">
      {cards.map((card, i) => (
        <Card
          key={`${i}card`}
          image={card.url}
          title={card.title}
          open={card.open}
          onClick={() => handleCardClick(i)}
          disable={secondCard !== null}
          delay={i * 25}
        />
      ))}
    </div>
  );
};

export default Cards;
