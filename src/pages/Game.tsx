import { useEffect, useState } from "react";
import PickCategory from "../features/game/pickCategory/PickCategory";
import GamePage from "../features/game/gamePage/GamePage";
import { useAppSelector } from "../hooks";
import PageOverlay from "../features/game/overlay/PageOverlay";
import Menu from "../features/game/pauseMenu/Menu";

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
    <section className="relative">
      {!gameBegin.start ? (
        <PickCategory setGameBegin={setGameBegin} />
      ) : (
        <GamePage categoryIndex={categoryIndex} />
      )}
      <Menu />
      <PageOverlay />
    </section>
  );
};

export default Game;
