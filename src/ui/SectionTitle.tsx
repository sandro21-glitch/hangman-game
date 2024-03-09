type SectionTitleTypes = {
  text: string;
};
const SectionTitle = ({ text }: SectionTitleTypes) => {
  return (
    <h1
      className="text-center mx-auto text-[3.5rem] md:text-[5rem] lg:text-[8rem] title-gradient 
    font-bold tracking-wider
    "
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
