import BackBtn from "./BackBtn";

const Header = () => {
  return (
    <header className="flex items-center py-5 w-full">
      <BackBtn />
      <h1
        className="text-center mx-auto text-[4rem] md:text-[8rem] title-gradient 
        font-bold tracking-wider
        "
      >
        How to play
      </h1>
    </header>
  );
};

export default Header;
