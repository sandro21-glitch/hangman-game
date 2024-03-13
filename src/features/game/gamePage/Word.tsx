import { useAppSelector } from "../../../hooks";

type WordTypes = {
  categoryIndex: number;
};

const Word = ({ categoryIndex }: WordTypes) => {
  const { activeCategory, usedChars } = useAppSelector((store) => store.game);
  const word = activeCategory[categoryIndex].name;

  const chars = usedChars.map((char) => char.toLowerCase());

  const renderWord = () => {
    const words = word.split(" ");

    return (
      <div className="mt-[3rem] mb-[5rem] flex justify-center flex-wrap items-center">
        {words.map((wordPart, index) => (
          <div key={index} className="flex mr-[7rem]">
            {wordPart.split("").map((char, charIndex) => {
              const isCharUsed = chars.includes(char.toLowerCase());
              return char === " " ? (
                <span key={charIndex}></span>
              ) : (
                <span
                  key={charIndex}
                  className={`bg-primary-blue max-w-[7rem] max-h-[6rem] m-1 p-[3.5rem]
                    rounded-[2rem] inset--3 inline-flex items-center justify-center text-[4rem] ${
                      isCharUsed ? "text-white" : ""
                    }`}
                >
                  {isCharUsed ? char : ""}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className=" mt-[3rem] mb-[5rem] flex justify-center flex-wrap items-center">
      {renderWord()}
    </div>
  );
};

export default Word;
