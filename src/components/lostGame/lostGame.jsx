import "./lostGame.css";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";

export default function LostGame() {

  const navigate = useNavigate();

  return (
    <div className="result-screen lost">
      <h1>😢 ¡You Lost! 😢</h1>
      <p>Game Over! Better luck next time!</p>
      <button onClick={() => navigate(ROUTES.HOME)}>Play again</button>
    </div>
  );
}
