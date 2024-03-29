import { useAppDispatch, useAppSelector } from "../../../hooks";
import useSound from "../../../hooks/useSound";
import { setActiveCategoryList } from "../hangmanSlice";
type CategoriesListProps = {
  setGameBegin: React.Dispatch<
    React.SetStateAction<{ start: boolean; category: string }>
  >;
};

const CategoriesList = ({ setGameBegin }: CategoriesListProps) => {
  const dispatch = useAppDispatch();
  const { playSound } = useSound();
  const { categoryNames } = useAppSelector((store) => store.game);
  const handleCategoryClick = (category: string) => {
    dispatch(setActiveCategoryList(category));
    setGameBegin((prev) => ({ ...prev, category: category, start: true }));
    playSound();
  };
  return (
    <ul className="mt-10 flex flex-col md:flex-row items-center justify-center flex-wrap gap-5">
      {categoryNames.map((category, index) => {
        return (
          <li
            onClick={() => handleCategoryClick(category)}
            key={index}
            className="md:max-w-[384px] w-full min-h-[64px] h-fit md:h-[190px] p-5 cursor-pointer border-none rounded-[35px] bg-primary-blue 
            text-center text-white text-[1.5rem] md:text-[2.7rem] inset--3 flex justify-center items-center tracking-wider relative
            after:absolute after:rounded-[35px] after:left-0 after:right-0 hover:after:bg-[#fff]
             after:opacity-[0.2] after:transition-all after:ease-in after:duration-150 after:w-full after:h-full
            "
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
