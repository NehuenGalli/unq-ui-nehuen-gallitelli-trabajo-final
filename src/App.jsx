import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/home";
import GamePage from "./pages/game";
import WinGamePage from "./pages/winGame";
import LostGamePage from "./pages/lostGame";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:sessionId" element={<GamePage />} />
        <Route path="/win" element={<WinGamePage />} />
        <Route path="/game-over" element={<LostGamePage />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}