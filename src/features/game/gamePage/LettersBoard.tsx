import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setClickedChar } from "../hangmanSlice";

const LettersBoard = () => {
  const { usedChars } = useAppSelector((store) => store.game);
  const [disabledButtons, setDisabledButtons] = useState<{
    [key: string]: boolean;
  }>({});
  const alphabetArray = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  const dispatch = useAppDispatch();
  const handleAddChar = (char: string) => {
    dispatch(setClickedChar(char));
    setDisabledButtons((prevState) => ({ ...prevState, [char]: true }));
  };

  const isDisabled = (char: string) => disabledButtons[char];

  useEffect(() => {
    if (usedChars.length === 0) {
      setDisabledButtons({});
    }
  }, [usedChars]);
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center select-none">
      {alphabetArray.map((a, index) => {
        return (
          <button
            type="button"
            disabled={isDisabled(a)}
            onClick={() => handleAddChar(a)}
            key={index}
            className={`w-[2.5rem] h-[4rem] sm:w-[3.5rem] sm:h-[4rem] lg:w-[7rem] lg:h-[5rem] bg-white rounded-[1rem]
             flex justify-center items-center text-[#261676]
              text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-medium  transition-colors ease-in duration-150
              ${
                isDisabled(a)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-blue hover:text-white cursor-pointer"
              }`}
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};

export default LettersBoard;
