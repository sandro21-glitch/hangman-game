import { useEffect, useState } from "react";
import PickCategory from "../features/game/pickCategory/PickCategory";
import GamePage from "../features/game/gamePage/GamePage";
import { useAppSelector } from "../hooks";

const Game = () => {
  const [gameBegin, setGameBegin] = useState({ start: false, category: "" });
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const { activeCategory } = useAppSelector((store) => store.game);
  useEffect(() => {
    if (activeCategory && activeCategory.length > 0) {
      const randomIndex = Math.floor(Math.random() * activeCategory.length);
      setCategoryIndex(randomIndex);
    }
  }, [activeCategory]);

  return (
    <section>
      {!gameBegin.start ? (
        <PickCategory setGameBegin={setGameBegin} />
      ) : (
        <GamePage categoryIndex={categoryIndex} />
      )}
    </section>
  );
};

export default Game;
