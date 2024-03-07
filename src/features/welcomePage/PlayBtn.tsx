import { useNavigate } from "react-router-dom";
import playIcon from "/assets/play-button.svg";

const PlayBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/game")}
      className="w-[12rem] h-[12rem] flex justify-center items-center rounded-full inset--2 button-gradient
    cursor-pointer outline-none border-none
  "
    >
      <img src={playIcon} alt="play icon" className="bg-none" />
    </button>
  );
};

export default PlayBtn;
