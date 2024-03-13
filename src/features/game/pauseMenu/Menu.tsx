import SectionTitle from "../../../ui/SectionTitle";
import PageOverlay from "../overlay/PageOverlay";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className="absolute inset-0 h-screen w-full z-[1] flex justify-center items-center">
      <PageOverlay />
      <div className="w-[37rem] h-[27rem] gradient-bg inset--1 rounded-[72px] relative flex justify-center items-center">
        <header className="absolute top-[-20%] left-0 right-0 mx-auto z-[1]">
          <SectionTitle text="Paused" />
        </header>
        <MenuList />
      </div>
    </div>
  );
};

export default Menu;
