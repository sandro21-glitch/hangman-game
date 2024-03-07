import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HowToPlayPage from "./pages/HowToPlayPage";
import Game from "./pages/Game";

function App() {
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
