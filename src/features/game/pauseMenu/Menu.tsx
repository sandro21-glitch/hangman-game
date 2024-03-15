import SectionTitle from "../../../ui/SectionTitle";
import PageOverlay from "../overlay/PageOverlay";
import MenuList from "./MenuList";

type MenuTypes = {
  title: string;
  setIsMenuOpen: (isOpen: boolean) => void;
  setGameBegin: (value: { start: boolean; category: string }) => void;
  setCategoryIndex: (index: number) => void;
};

const Menu = ({
  title,
  setIsMenuOpen,
  setGameBegin,
  setCategoryIndex,
}: MenuTypes) => {
  return (
    <div className="absolute inset-0 h-screen w-full z-[1] flex justify-center items-center select-none">
      <PageOverlay />
      <div className="w-[37rem] h-[27rem] gradient-bg inset--1 rounded-[72px] relative flex justify-center items-center">
        <header className="absolute top-[-20%] left-0 right-0 mx-auto z-[1]">
          <SectionTitle text={title} />
        </header>
        <MenuList
          setIsMenuOpen={setIsMenuOpen}
          setGameBegin={setGameBegin}
          setCategoryIndex={setCategoryIndex}
        />
      </div>
    </div>
  );
};

export default Menu;
