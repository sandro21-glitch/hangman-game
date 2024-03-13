import GameHeader from "./GameHeader";
import LettersBoard from "./LettersBoard";
import Word from "./Word";

type GamePageTypes = {
  categoryIndex: number;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const GamePage = ({ categoryIndex, setIsMenuOpen }: GamePageTypes) => {
  return (
    <article className="section-center-game">
      <GameHeader setIsMenuOpen={setIsMenuOpen} />
      <Word categoryIndex={categoryIndex} />
      <LettersBoard />
    </article>
  );
};

export default GamePage;
