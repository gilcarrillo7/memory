import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

import { selectName, selectCurrentLevel } from "../../features/ui/uiSlice";
import {
  fetchCards,
  selectStatus,
  selectFinished,
  selectError,
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
  const error = useAppSelector(selectError);

  const [start, setStart] = useState(false);

  useEffect(() => {
    dispatch(fetchCards(currentLevel));
    setStart(true);
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
      ) : error ? (
        <div className="w-full h-full text-danger flex justify-center items-center text-3xl">
          Ocurrió un error al obtener las imagenes. Recarga la página.
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
