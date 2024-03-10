import { useState } from "react";
import PickCategory from "../features/game/pickCategory/PickCategory";
import GamePage from "../features/game/gamePage/GamePage";

const Game = () => {
  const [gameBegin, setGameBegin] = useState({ start: false, category: "" });

  return (
    <section>
      {!gameBegin.start ? (
        <PickCategory setGameBegin={setGameBegin} />
      ) : (
        <GamePage />
      )}
    </section>
  );
};

export default Game;
