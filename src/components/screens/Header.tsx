import React, { useCallback } from "react";
import {
  selectWins,
  selectErrors,
  fetchCards,
} from "../../features/memory/memorySlice";
import {
  selectCurrentLevel,
  selectLevels,
  setCurrentLevel,
} from "../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Select from "../shared/Select";

const Header = () => {
  const dispatch = useAppDispatch();
  const wins = useAppSelector(selectWins);
  const errors = useAppSelector(selectErrors);
  const levels = useAppSelector(selectLevels);
  const currentLevel = useAppSelector(selectCurrentLevel);

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const level = Number(e.target.value);
      dispatch(setCurrentLevel(level));
      dispatch(fetchCards(level));
    },
    []
  );

  return (
    <div className="w-full left-0 top-0 fixed p-4 text-2xl sm:text-4xl flex justify-between sm:gap-4 bg-gradient-to-r from-primary to-tertiary z-10">
      <div className="">
        <p className="font-light">
          Aciertos: <span className="underline">{wins}</span>
        </p>
        <p className="font-light">
          Errores: <span className="underline">{errors}</span>
        </p>
      </div>
      <Select
        label="Nivel"
        options={levels}
        selected={currentLevel}
        onChange={(e) => handleSelectChange(e)}
      />
    </div>
  );
};

export default Header;
