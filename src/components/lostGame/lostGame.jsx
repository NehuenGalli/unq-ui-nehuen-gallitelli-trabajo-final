import "./lostGame.css";
import { useNavigate } from "react-router";

export default function LostGame() {

  const navigate = useNavigate();

  return (
    <div className="result-screen lost">
      <h1>😢 ¡You Lost! 😢</h1>
      <p>Game Over! Better luck next time!</p>
      <button onClick={() => navigate("/")}>Play again</button>
    </div>
  );
}
