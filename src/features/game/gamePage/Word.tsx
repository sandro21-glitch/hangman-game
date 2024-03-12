import { useAppSelector } from "../../../hooks";

type WordTypes = {
  categoryIndex: number;
};

const Word = ({ categoryIndex }: WordTypes) => {
  const { activeCategory, usedChars } = useAppSelector((store) => store.game);
  const word = activeCategory[categoryIndex].name;

  const chars = usedChars.map((char) => char.toLowerCase());

  const renderWord = () => {
    return word.split("").map((char, index) => {
      const isCharUsed = chars.includes(char.toLowerCase());
      return char === " " ? (
        <span key={index} className="mx-[3.5rem]"></span>
      ) : (
        <span
          key={index}
          className={`bg-primary-blue max-w-[7rem] max-h-[6rem] m-1 p-[3.5rem]
             rounded-[2rem] inset--3 inline-flex items-center justify-center text-[4rem] ${
               isCharUsed ? "text-white" : ""
             }`}
        >
          {isCharUsed ? char : ""}
        </span>
      );
    });
  };

  return (
    <div className=" mt-[3rem] mb-[5rem] flex justify-center items-center">
      {renderWord()}
    </div>
  );
};

export default Word;
