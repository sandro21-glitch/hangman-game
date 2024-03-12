import GameHeader from "./GameHeader";
import LettersBoard from "./LettersBoard";
import Word from "./Word";

type GamePageTypes = {
  categoryIndex: number;
};

const GamePage = ({ categoryIndex }: GamePageTypes) => {
  return (
    <article className="section-center-game">
      <GameHeader />
      <Word categoryIndex={categoryIndex} />
      <LettersBoard />
    </article>
  );
};

export default GamePage;
