import { useAppSelector } from "../../../hooks";

type WordTypes = {
  categoryIndex: number | null;
};

const Word = ({ categoryIndex }: WordTypes) => {
  const { activeCategory, usedChars } = useAppSelector((store) => store.game);
  const wordWithApostrophe =
    categoryIndex !== null ? activeCategory[categoryIndex].name : "";
  const word = wordWithApostrophe.replace("'", "");
  const chars = usedChars.map((char) => char.toLowerCase());

  const renderWord = () => {
    const words = word.split(" ");

    return (
      <>
        {words.map((wordPart, index) => (
          <div key={index} className="flex mr-[2rem] md:mr-[3rem] lg:mr-[6rem]">
            {wordPart.split("").map((char, charIndex) => {
              const isCharUsed = chars.includes(char.toLowerCase());
              return char === " " ? (
                <div key={charIndex}></div>
              ) : (
                <div
                  key={charIndex}
                  className={`bg-primary-blue
                    w-[2rem] 
                    h-[3rem] 
                    sm:w-[3rem]
                    sm:h-[4rem]
                    md:w-[3rem]
                    md:h-[4rem]
                    lg:w-[6rem]
                    lg:h-[6rem]
                    md:mx-1
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
