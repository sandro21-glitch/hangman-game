import GameHeader from "./GameHeader";
import LettersBoard from "./LettersBoard";
import Word from "./Word";

const GamePage = () => {
  return (
    <article className="section-center-game">
      <GameHeader />
      <Word />
      <LettersBoard />
    </article>
  );
};

export default GamePage;
