import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  textForButton: string;
  handleResetGrid: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  className?: string;
  type?: "danger" | "button" | "small" | "outline";
};

const Button = ({
  textForButton,
  handleResetGrid,
  isDisabled = false,
  className = "",
  type,
}: Props) => {
  return (
    <button
      onClick={handleResetGrid}
      disabled={isDisabled}
      className={twMerge(`
                relative
                rounded-lg
                hover:opacity-80
                transition
                text-center
                w-fit
                px-4
                ${
                  type === "outline"
                    ? "bg-white border-black border text-black py-1.5"
                    : type === "danger"
                    ? "border-red-500 bg-red-400 text-white font-semibold"
                    : type === "small"
                    ? "font-thin text-xs py-1 px-3"
                    : type === "button"
                    ? "bg-rose-500 border-red-500 text-white py-2 text-md font-semibold"
                    : ""
                }
                ${className}
                `)}
    >
      {textForButton}
    </button>
  );
};

export default Button;
