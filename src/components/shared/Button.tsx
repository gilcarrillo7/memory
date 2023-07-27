import React from "react";

const Button = ({
  className = "",
  type = "button",
  onClick,
  children,
  variant = "secondary",
}: {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "secondary" | "light";
}) => {
  return (
    <button
      type={type}
      className={`${className} text-3xl rounded-full py-2 w-full sm:w-[250px] mx-auto ${
        variant === "secondary"
          ? "bg-secondary text-white hover:bg-secondary/80"
          : "bg-light text-secondary hover:bg-light/80 border-secondary border-2"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
