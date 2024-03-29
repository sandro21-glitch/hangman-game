import { useState, useRef, useEffect } from "react";
import soundUrl from "/assets/sounds/clickBubble.wav";
const useSound = (volume = 0.1) => {
  const audioRef = useRef(new Audio(soundUrl));
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    audioRef.current.volume = volume;
    audioRef.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      audioRef.current.removeEventListener("ended", handleEnded);
    };
  }, []);

  return { playSound, isPlaying };
};

export default useSound;
