import SectionTitle from "../../../ui/SectionTitle";
import PageOverlay from "../overlay/PageOverlay";
import MenuList from "./MenuList";

type MenuTypes = {
  setIsMenuOpen: (isOpen: boolean) => void;
  setGameBegin: (value: { start: boolean; category: string }) => void;
};

const Menu = ({ setIsMenuOpen, setGameBegin }: MenuTypes) => {
  return (
    <div className="absolute inset-0 h-screen w-full z-[1] flex justify-center items-center select-none">
      <PageOverlay />
      <div className="w-[37rem] h-[27rem] gradient-bg inset--1 rounded-[72px] relative flex justify-center items-center">
        <header className="absolute top-[-20%] left-0 right-0 mx-auto z-[1]">
          <SectionTitle text="Paused" />
        </header>
        <MenuList setIsMenuOpen={setIsMenuOpen} setGameBegin={setGameBegin} />
      </div>
    </div>
  );
};

export default Menu;
