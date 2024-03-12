type SectionTitleProps = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <h1
      style={{ textTransform: "uppercase" }}
      className="title"
      data-text={text}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
