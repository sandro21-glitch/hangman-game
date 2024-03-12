import { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { setClickedChar } from "../hangmanSlice";

const LettersBoard = () => {
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

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center">
      {alphabetArray.map((a, index) => {
        return (
          <button
            type="button"
            disabled={isDisabled(a)}
            onClick={() => handleAddChar(a)}
            key={index}
            className={`w-[7rem] h-[5rem] bg-white rounded-[1rem]
             flex justify-center items-center text-[#261676]
              text-[3rem] font-medium  cursor-pointer transition-colors ease-in duration-150
              ${
                isDisabled(a)
                  ? "opacity-50 cursor-default"
                  : "hover:bg-primary-blue hover:text-white "
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
