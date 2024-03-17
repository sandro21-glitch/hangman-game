import { useRef } from "react";

import soundLogo from "/assets/sound.svg";
import soundOffLogo from "/assets/sound-off.svg";
import musicSound from "/assets/sounds/ambiance.mp3";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleMusic } from "../game/hangmanSlice";

const SoundButton = () => {
  const dispatch = useAppDispatch();
  const { music } = useAppSelector((store) => store.game);
  const audioRef = useRef(new Audio(musicSound));
  const handleStartMusic = () => {
    dispatch(toggleMusic(!music));
    if (!music) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleStartMusic}
        className="absolute sm:right-[7rem] right-5 top-5 sm:top-10 bg-primary-blue p-[.3rem] rounded-md inset--3"
      >
        <img
          loading="lazy"
          src={music ? soundLogo : soundOffLogo}
          alt="sound logo"
        />
      </button>
      <audio ref={audioRef} loop>
        <source src={musicSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default SoundButton;
