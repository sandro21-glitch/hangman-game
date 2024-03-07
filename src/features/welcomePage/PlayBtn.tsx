import playIcon from "/assets/play-button.svg";

const PlayBtn = () => {
  return (
    <button
      className="w-[12rem] h-[12rem] flex justify-center items-center rounded-full inset--2 button-gradient
    cursor-pointer outline-none border-none
  "
    >
      <img src={playIcon} alt="play icon" className="bg-none" />
    </button>
  );
};

export default PlayBtn;
