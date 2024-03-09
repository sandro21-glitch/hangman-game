import { useNavigate } from "react-router-dom";
import backLogo from "/assets/back-button.svg";
import useSound from "../../hooks/useSound";
const BackBtn = () => {
  const navigate = useNavigate();
  const { playSound } = useSound();
  const handleBack = () => {
    playSound();
    navigate("/");
  };
  return (
    <button
      onClick={handleBack}
      className="w-[3.5rem] h-[3.5rem] md:w-[6rem] md:h-[5.5rem] flex justify-center items-center rounded-full  button-gradient
    cursor-pointer outline-none border-none
  "
    >
      <img
        src={backLogo}
        alt="back icon"
        className="bg-none w-[1.5rem] h-[1.5rem] md:w-auto md:h-auto"
      />
    </button>
  );
};

export default BackBtn;
