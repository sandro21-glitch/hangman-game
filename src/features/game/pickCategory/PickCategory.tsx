import Header from "../../../ui/Header";
import CategoriesList from "./CategoriesList";

const PickCategory = () => {
  return (
    <article className="section-center-game">
      <Header text="pick a categories" />
      <CategoriesList />
    </article>
  );
};

export default PickCategory;
