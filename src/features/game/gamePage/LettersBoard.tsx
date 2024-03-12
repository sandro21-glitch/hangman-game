import { useAppDispatch } from "../../../hooks";
import { setClickedChar } from "../hangmanSlice";

const LettersBoard = () => {
  const alphabetArray = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  const dispatch = useAppDispatch();
  const handleAddChar = (char: string) => {
    dispatch(setClickedChar(char));
  };
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center">
      {alphabetArray.map((a, index) => {
        return (
          <button
            type="button"
            onClick={() => handleAddChar(a)}
            key={index}
            className="w-[7rem] h-[5rem] bg-white rounded-[1rem]
             flex justify-center items-center text-[#261676]
              text-[3rem] font-medium hover:text-white hover:bg-primary-blue cursor-pointer transition-colors ease-in duration-150"
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};

export default LettersBoard;
