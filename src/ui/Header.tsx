import SectionTitle from "./SectionTitle";
import BackBtn from "../features/howToPlay/BackBtn";

type HeaderTypes = {
  text: string;
};
const Header = ({ text }: HeaderTypes) => {
  return (
    <header className="flex items-center py-10 w-full">
      <BackBtn />
      <SectionTitle text={text} />
    </header>
  );
};

export default Header;
