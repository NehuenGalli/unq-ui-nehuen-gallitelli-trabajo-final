import { BrowserRouter, Route, Routes } from "react-router";
// import { ToastContainer } from "react-toastify";
import HomePage from "./pages/home";
import GamePage from "./pages/game";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:sessionId" element={<GamePage />} />
      </Routes>
      {/* <ToastContainer position="bottom-right" /> */}
    </BrowserRouter>
  );
}