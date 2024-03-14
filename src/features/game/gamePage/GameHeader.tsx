import menuLogo from "/assets/menu.svg";
import heart from "/assets/heart.svg";
import useSound from "../../../hooks/useSound";

type GameHeaderTypes = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const GameHeader = ({ setIsMenuOpen }: GameHeaderTypes) => {
  const { playSound } = useSound();
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    playSound();
  };
  return (
    <header className="py-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button
            type="button"
            onClick={handleOpenMenu}
            className="button-gradient h-[5.5rem] w-[5.5rem] inset--4 rounded-full flex justify-center items-center"
          >
            <img src={menuLogo} alt="menu" />
          </button>
          <h2 className="text-[5rem] text-white font-bold tracking-wider select-none">
            Movies
          </h2>
        </div>
        <ul className="flex items-center gap-10">
          <li className="w-[15rem] h-fit py-[.5rem] px-[.5rem] bg-white rounded-full">
            <span className="block w-full h-[.8rem] bg-[#261676] transition-all ease-in duration-150 rounded-full"></span>
          </li>
          <li>
            <img src={heart} alt="heart icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default GameHeader;
