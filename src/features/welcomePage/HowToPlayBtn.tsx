import { useNavigate } from "react-router-dom";
import useSound from "../../hooks/useSound";

const HowToPlayBtn = () => {
  const { playSound } = useSound();
  const navigate = useNavigate();
  const handleClickButton = () => {
    playSound();
    navigate("/how");
  };
  return (
    <button
      onClick={handleClickButton}
      className="uppercase py-[.8rem] px-[4rem] rounded-full text-[2rem] tracking-[.1rem]
   cursor-pointer bg-primary-blue hover:bg-opacity-80 transition-all ease-in duration-150 inset--3 text-white "
    >
      how to play
    </button>
  );
};

export default HowToPlayBtn;
