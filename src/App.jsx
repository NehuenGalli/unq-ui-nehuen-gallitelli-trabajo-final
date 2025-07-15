import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import { ROUTES } from "./constants";
import HomePage from "./pages/home";
import GamePage from "./pages/game";
import WinGamePage from "./pages/winGame";
import LostGamePage from "./pages/lostGame";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.GAME_WIN} element={<WinGamePage />} />
        <Route path={ROUTES.GAME_OVER} element={<LostGamePage />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}