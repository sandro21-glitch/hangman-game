import { useAppSelector } from "../../../hooks";

type WordTypes = {
  categoryIndex: number | null;
};

const Word = ({ categoryIndex }: WordTypes) => {
  const { activeCategory, usedChars } = useAppSelector((store) => store.game);
  const word = categoryIndex !== null ? activeCategory[categoryIndex].name : "";

  const chars = usedChars.map((char) => char.toLowerCase());

  const renderWord = () => {
    const words = word.split(" ");

    return (
      <>
        {words.map((wordPart, index) => (
          <div key={index} className="flex mr-[7rem]">
            {wordPart.split("").map((char, charIndex) => {
              const isCharUsed = chars.includes(char.toLowerCase());
              return char === " " ? (
                <div key={charIndex}></div>
              ) : (
                <div
                  key={charIndex}
                  className={`bg-primary-blue
                    w-[2.5rem] 
                    h-[3.5rem] 
                    sm:w-[3.5rem]
                    sm:h-[4.5rem]
                    md:w-[4.5rem]
                    md:h-[5.5rem]
                    lg:w-[6rem]
                    lg:h-[6rem]
                    m-1 
                    rounded-[2rem] inset--3 flex items-center justify-center text-[1.5rem] lg:text-[4rem] ${
                      isCharUsed ? "text-white opacity-100" : "opacity-[40%]"
                    }`}
                >
                  {isCharUsed ? char : ""}
                </div>
              );
            })}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="mt-[3rem] mb-[50%] lg:mb-[5rem] flex justify-center flex-wrap select-none">
      {renderWord()}
    </div>
  );
};

export default Word;
