import menuLogo from "/assets/menu.svg";
import heart from "/assets/heart.svg";
import useSound from "../../../hooks/useSound";
import { useAppSelector } from "../../../hooks";

type GameHeaderTypes = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const GameHeader = ({ setIsMenuOpen }: GameHeaderTypes) => {
  const { playSound } = useSound();
  const { health, categoryName } = useAppSelector((store) => store.game);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    playSound();
  };
  return (
    <header className="py-5 lg:py-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-10">
          <button
            type="button"
            onClick={handleOpenMenu}
            className="button-gradient w-[3rem] h-[3rem] lg:h-[5.5rem] lg:w-[5.5rem] inset--4 rounded-full flex justify-center items-center"
          >
            <img
              loading="lazy"
              src={menuLogo}
              alt="menu"
              className="w-[1rem] md:w-auto"
            />
          </button>
          <h2 className="text-[1.7rem] md:text-[5rem] text-white font-bold tracking-wider select-none">
            {categoryName}
          </h2>
        </div>
        <ul className="flex items-center gap-2 lg:gap-7">
          <li className="w-[8rem] lg:w-[15rem] h-fit py-[.2rem] lg:py-[.3rem] px-[.3rem] md:py-[.5rem] md:px-[.5rem] bg-white rounded-full">
            <span
              style={{ width: `${health}%` }}
              className="block w-full h-[.6rem] lg:h-[.8rem] bg-[#261676] transition-all ease-in duration-150 rounded-full"
            ></span>
          </li>
          <li>
            <img
              src={heart}
              alt="heart icon"
              loading="lazy"
              className="w-[2rem] md:w-[3rem] lg:w-full h-auto"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default GameHeader;
