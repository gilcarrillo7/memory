import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import { useAppDispatch } from "../../hooks";

import { setName as setStateName } from "../../features/ui/uiSlice";
import Button from "../shared/Button";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ triggerOnce: true });

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    if (e.target.value.trim() === "") setError(true);
    else setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "" && !error) dispatch(setStateName(name));
    else setError(true);
  };

  return (
    <>
      <h1
        ref={ref}
        className={`font-semibold text-center text-5xl transition duration-500 ease-in-out ${
          inView ? "opacity-100" : "opacity-0 -translate-y-12"
        }`}
      >
        Memory Game
      </h1>
      <form
        className={`my-12 flex flex-col items-center color-secondary transition duration-300 delay-500 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="text-2xl font-light">
          Ingresa tu nombre
        </label>
        <input
          id="username"
          className="w-full sm:w-[300px] text-2xl bg-transparent border-b-2 border-secondary outline-none text-center mt-2 mb-6"
          type="text"
          name="username"
          autoComplete="off"
          onChange={handleChange}
        />
        {error && (
          <p className="text-danger -mt-4 mb-4">Por favor ingresa tu nombre</p>
        )}
        <Button type="submit">Empezar</Button>
      </form>
    </>
  );
};

export default RegisterForm;
