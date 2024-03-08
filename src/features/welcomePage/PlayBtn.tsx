import { useNavigate } from "react-router-dom";
import playIcon from "/assets/play-button.svg";
import useSound from "../../hooks/useSound";

const PlayBtn = () => {
  const navigate = useNavigate();
  const { playSound } = useSound();
  const handleClickPlay = () => {
    playSound();
    navigate("/game");
  };
  return (
    <button
      onClick={handleClickPlay}
      className="w-[12rem] h-[12rem] flex justify-center items-center rounded-full inset--2 button-gradient
    cursor-pointer outline-none border-none
  "
    >
      <img src={playIcon} alt="play icon" className="bg-none" />
    </button>
  );
};

export default PlayBtn;
