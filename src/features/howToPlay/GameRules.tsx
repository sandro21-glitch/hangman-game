const rules = [
  {
    id: 1,
    title: "Choose Category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    id: 2,
    title: "Guess letters",
    description:
      "Take turns guessing letters. The computer fills in the  relevant blank spaces if your guess is correct. If it's  wrong, you lose some health, which empties after eight  incorrect guesses. ",
  },
  {
    id: 3,
    title: "Win or lose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

const GameRules = () => {
  return (
    <ul className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
      {rules.map((rule) => {
        return (
          <li
            key={rule.id}
            className="w-[25rem] h-[180px] lg:h-[32rem] rounded-[2rem] bg-white
             flex flex-col justify-center items-start lg:items-center gap-5 lg:gap-14 px-5 py-4 select-none"
          >
            <div className="flex items-center gap-5 lg:gap-14 flex-row lg:flex-col ">
              <h1 className="text-[2rem] lg:text-[4rem] text-primary-blue font-bold tracking-wider">
                0{rule.id}
              </h1>
              <h4 className="text-[1.5rem] lg:text-[3.5rem] uppercase font-bold tracking-wider text-dark-blue">{rule.title}</h4>
            </div>
            <p className="text-[1rem] lg:text-[1.7rem] text-gentle-purple lg:text-center">{rule.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GameRules;
