import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { resetGame, resetHealth } from "../hangmanSlice";
import useSound from "../../../hooks/useSound";
import setRandomCategoryIndex from "../../../utils/gameUtils";

type MenuListTypes = {
  setIsMenuOpen: (isOpen: boolean) => void;
  setGameBegin: (value: { start: boolean; category: string }) => void;
  setCategoryIndex: (index: number) => void;
};

const MenuList = ({
  setIsMenuOpen,
  setGameBegin,
  setCategoryIndex,
}: MenuListTypes) => {
  const { health, activeCategory, win } = useAppSelector((store) => store.game);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { playSound } = useSound();
  const handleQuitGame = () => {
    dispatch(resetGame());
    navigate("/");
    playSound();
  };
  const handleResetGame = () => {
    setGameBegin({ start: false, category: "" });
    setIsMenuOpen(false);
    dispatch(resetGame());
    dispatch(resetHealth());
    setRandomCategoryIndex(activeCategory, setCategoryIndex);
    playSound();
  };
  const handleContinue = () => {
    if (health === 0) {
      dispatch(resetHealth());
      setRandomCategoryIndex(activeCategory, setCategoryIndex);
      setIsMenuOpen(false);
      playSound();
    } else if (win) {
      dispatch(resetHealth());
      setRandomCategoryIndex(activeCategory, setCategoryIndex);
      setIsMenuOpen(false);
      playSound();
    } else {
      setIsMenuOpen(false);
      playSound();
    }
  };

  return (
    <ul className="flex flex-col gap-7">
      <li
        className="bg-primary-blue rounded-[40px] cursor-pointer px-[4rem] py-[.8rem]
       inset--3 border-none text-[2rem] text-white uppercase tracking-wider text-center
        hover:bg-blue-500 transition-all ease-in duration-150"
        onClick={handleContinue}
      >
        Continue
      </li>
      <li
        onClick={handleResetGame}
        className="bg-primary-blue rounded-[40px] cursor-pointer px-[4rem] py-[.8rem]
       inset--3 border-none text-[2rem] text-white uppercase tracking-wider text-center
        hover:bg-blue-500 transition-all ease-in duration-150"
      >
        New Category
      </li>
      <li
        onClick={handleQuitGame}
        className=" rounded-[40px] cursor-pointer px-[4rem] py-[.8rem]
        quit-game border-none text-[2rem] text-white uppercase tracking-wider text-center hover:opacity-85
          transition-opacity ease-in duration-150"
      >
        Quit Game
      </li>
    </ul>
  );
};

export default MenuList;
