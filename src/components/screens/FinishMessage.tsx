import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { selectName, selectCurrentLevel } from "../../features/ui/uiSlice";
import Button from "../shared/Button";
import { fetchCards } from "../../features/memory/memorySlice";

const FinishMessage = () => {
  const name = useAppSelector(selectName);
  const currentLevel = useAppSelector(selectCurrentLevel);
  const dispatch = useAppDispatch();

  const handleRestart = useCallback(() => {
    dispatch(fetchCards(currentLevel));
  }, []);

  return (
    <div className="w-screen h-screen fixed z-20 top-0 left-0 flex items-center justify-center bg-secondary/80 p-4">
      <div className="w-full sm:w-1/2 lg:w-1/2 border-4 border-dashed border-light text-light text-center text-3xl sm:text-5xl p-4">
        <p>Felicidades {name} </p>
        <p className="mb-4">Haz ganado el juego !!</p>
        <Button onClick={handleRestart} variant="light">
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

export default FinishMessage;
