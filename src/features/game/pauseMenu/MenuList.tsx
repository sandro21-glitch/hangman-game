import { useNavigate } from "react-router-dom";

type MenuListTypes = {
  setIsMenuOpen: (isOpen: boolean) => void;
  setGameBegin: (value: { start: boolean; category: string }) => void;
};

const MenuList = ({ setIsMenuOpen, setGameBegin }: MenuListTypes) => {
  const navigate = useNavigate();
  const handleQuitGame = () => {
    navigate("/");
  };
  const handleResetGame = () => {
    setGameBegin({ start: false, category: "" });
    setIsMenuOpen(false);
  };

  return (
    <ul className="flex flex-col gap-7">
      <li
        className="bg-primary-blue rounded-[40px] cursor-pointer px-[4rem] py-[.8rem]
       inset--3 border-none text-[2rem] text-white uppercase tracking-wider text-center
        hover:bg-blue-500 transition-all ease-in duration-150"
        onClick={() => setIsMenuOpen(false)}
      >
        Continue
      </li>
      <li
        onClick={() => handleResetGame()}
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
