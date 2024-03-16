import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HowToPlayPage from "./pages/HowToPlayPage";
import Game from "./pages/Game";
import { useAppSelector } from "./hooks";
import { useEffect, useRef } from "react";

function App() {

  const music = useAppSelector((state) => state.game.music);
  const audioRef = useRef(new Audio("/assets/sounds/ambiance.mp3"));

  useEffect(() => {
    if (music) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [music]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/how" element={<HowToPlayPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
