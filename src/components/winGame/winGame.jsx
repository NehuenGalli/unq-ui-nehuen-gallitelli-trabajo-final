import { useNavigate } from "react-router";
import "./winGame.css";
import { ROUTES } from "../../constants";

export default function WinGame() {

  const navigate = useNavigate();

  return (
    <div className="result-screen win">
      <h1>🎉 ¡You Won! 🎉</h1>
      <p>Congratulations you <strong>guessed the word!</strong></p>
      <button onClick={() => navigate(ROUTES.HOME)}>Play again</button>
    </div>
  );
}