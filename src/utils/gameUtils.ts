interface ActiveCategoryTypes {
  name: string;
  selected: boolean;
}

const setRandomCategoryIndex = (
  activeCategory: ActiveCategoryTypes[],
  setCategoryIndex: (index: number) => void
) => {
  
  if (activeCategory && activeCategory.length > 0) {
    const randomIndex = Math.floor(Math.random() * activeCategory.length);
    setCategoryIndex(randomIndex);
  }
};

export default setRandomCategoryIndex;
