import { useEffect, useState } from "react";
import PickCategory from "../features/game/pickCategory/PickCategory";
import GamePage from "../features/game/gamePage/GamePage";
import { useAppDispatch, useAppSelector } from "../hooks";
import PageOverlay from "../features/game/overlay/PageOverlay";
import Menu from "../features/game/pauseMenu/Menu";
import { checkWin, setActiveWord } from "../features/game/hangmanSlice";

const Game = () => {
  const [gameBegin, setGameBegin] = useState({ start: false, category: "" });
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null);
  const { activeCategory, health, usedChars, win } = useAppSelector(
    (store) => store.game
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const setRandomCategoryIndexIfNeeded = () => {
    if (activeCategory && activeCategory.length > 0 && categoryIndex === null) {
      const randomIndex = Math.floor(Math.random() * activeCategory.length);
      setCategoryIndex(randomIndex);
    }
  };
  useEffect(() => {
    setRandomCategoryIndexIfNeeded();
  }, [activeCategory, categoryIndex]);

  useEffect(() => {
    if (categoryIndex !== null) {
      dispatch(setActiveWord(categoryIndex));
    }
  }, [categoryIndex, dispatch, gameBegin.start]);

  useEffect(() => {
    dispatch(checkWin());
  }, [usedChars, dispatch,win]);

  return (
    <section className="relative">
      {!gameBegin.start ? (
        <PickCategory setGameBegin={setGameBegin} />
      ) : (
        <GamePage categoryIndex={categoryIndex} setIsMenuOpen={setIsMenuOpen} />
      )}
      {isMenuOpen && (
        <Menu
          title="Paused"
          setIsMenuOpen={setIsMenuOpen}
          setGameBegin={setGameBegin}
          setCategoryIndex={setCategoryIndex}
        />
      )}
      {health === 0 && (
        <Menu
          title="You Lose"
          setIsMenuOpen={setIsMenuOpen}
          setGameBegin={setGameBegin}
          setCategoryIndex={setCategoryIndex}
        />
      )}
      {win && (
        <Menu
          title="You Win"
          setIsMenuOpen={setIsMenuOpen}
          setGameBegin={setGameBegin}
          setCategoryIndex={setCategoryIndex}
        />
      )}
      <PageOverlay />
    </section>
  );
};

export default Game;
