import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

import { selectName, selectCurrentLevel } from "../../features/ui/uiSlice";
import {
  fetchCards,
  selectStatus,
  selectFinished,
} from "../../features/memory/memorySlice";

import Spinner from "../shared/Spinner";
import FinishMessage from "./FinishMessage";
import Header from "./Header";
import Cards from "./Cards";

const Game = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const status = useAppSelector(selectStatus);
  const finished = useAppSelector(selectFinished);
  const currentLevel = useAppSelector(selectCurrentLevel);

  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCards(currentLevel));
      setStart(true);
    }, 1000);
    return () => {
      setStart(false);
    };
  }, []);

  return (
    <>
      {status === "loading" ? (
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`text-3xl font-semibold text-center mb-2 transition duration-500 ease-in-out ${
              start ? "opacity-0" : "opacity-100 visible"
            }`}
          >
            Hola {name}
          </h1>
          <Spinner />
        </div>
      ) : (
        <div className="w-full h-full">
          <Header />
          <Cards />
          {finished && <FinishMessage />}
        </div>
      )}
    </>
  );
};

export default Game;
