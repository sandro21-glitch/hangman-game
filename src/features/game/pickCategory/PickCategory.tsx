import Header from "../../../ui/Header";
import CategoriesList from "./CategoriesList";

type PickCategoryProps = {
  setGameBegin: React.Dispatch<
    React.SetStateAction<{ start: boolean; category: string }>
  >;
};
const PickCategory = ({ setGameBegin }: PickCategoryProps) => {
  return (
    <article className="section-center-game">
      <Header text="pick a categories" />
      <CategoriesList setGameBegin={setGameBegin} />
    </article>
  );
};

export default PickCategory;
