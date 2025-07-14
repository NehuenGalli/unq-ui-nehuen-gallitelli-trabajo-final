import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import Board from "../components/board/board";
import Keyboard from "../components/keyboard/keyboard";
import { checkWord } from "../services/wordApi";
import { toast } from "react-toastify";

export default function GamePage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState(() => {
    const savedSession = JSON.parse(localStorage.getItem("session"));
    return savedSession?.sessionId === sessionId ? savedSession : null;
  });

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // Cada guess es un array de {letter, solution, animating}
  const [keyStatuses, setKeyStatuses] = useState({});
  const [isVerifying, setIsVerifying] = useState(false);
  const [gameStatus, setGameStatus] = useState("playing");

  const wordLength = session?.wordLenght ?? 5;
  const maxTries = 6;

  const handleKeyPress = useCallback(
    (key) => {
      if (gameStatus !== "playing" || isVerifying) return;

      if (key === "ENTER") {
        if (currentGuess.length === wordLength) submitGuess(currentGuess);
      } else if (key === "⌫") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[A-Z]$/.test(key) && currentGuess.length < wordLength) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [currentGuess, gameStatus, isVerifying]
  );

  const submitGuess = async (guess) => {
    try {
      setIsVerifying(true);
      const result = await checkWord({ sessionId, word: guess.toLowerCase() });

      const animatedResult = result.map((r) => ({ ...r, animating: true }));

      setGuesses((prev) => [...prev, animatedResult]);
      updateKeyStatuses(result);

      if (result.every((r) => r.solution === "correct")) {
        toast.success("¡Adivinaste la palabra!");
        setGameStatus("won");
        // setTimeout(() => navigate(`/win/${sessionId}`));
      } else if (guesses.length + 1 >= maxTries) {
        toast.error(`¡Perdiste! La palabra era: ${session.word}`);
        setGameStatus("lost");
        setTimeout(() => navigate(`/game-over/${sessionId}`));
      }

      setCurrentGuess("");
    } catch (err) {
      toast.error("Palabra inválida. Intenta con otra.");
    } finally {
      setTimeout(() => {
        setGuesses((prev) =>
          prev.map((row, i) =>
            i === prev.length - 1
              ? row.map((box) => ({ ...box, animating: false }))
              : row
          )
        );
        setIsVerifying(false);
      }, wordLength * 300);
    }
  };

  const updateKeyStatuses = (result) => {
    const updated = { ...keyStatuses };
    result.forEach(({ letter, solution }) => {
      const upperLetter = letter.toUpperCase();
      const current = updated[upperLetter];
      if (
        !current ||
        solution === "correct" ||
        (solution === "elsewhere" && current !== "correct") ||
        (solution === "absent" && !["correct", "elsewhere"].includes(current))
      ) {
        updated[upperLetter] = solution;
      }
    });
    setKeyStatuses(updated);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toUpperCase();
      if (key === "ENTER") handleKeyPress("ENTER");
      else if (key === "BACKSPACE") handleKeyPress("⌫");
      else if (/^[A-Z]$/.test(key)) handleKeyPress(key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  if (!session || session.sessionId !== sessionId) {
    return <p>Error: sesión inválida</p>;
  }

  return (
    <>
      <Board
        guesses={guesses}
        currentWord={currentGuess}
        wordLength={wordLength}
        maxTries={maxTries}
      />
      <Keyboard onKeyPress={handleKeyPress} keyStatuses={keyStatuses} />
    </>
  );
}