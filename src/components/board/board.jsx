import LetterBox from "../letterBox/letterBox";
import "./board.css"

export default function Board({ guesses, currentWord, wordLength, maxTries }) {
  const filledRows = guesses.length;
  const showCurrentRow = filledRows < maxTries;
  const emptyRows = maxTries - filledRows - (showCurrentRow ? 1 : 0);

  return (
    <div className="board">
      {/* Palabras ya intentadas con animación */}
      {guesses.map((guess, i) => (
        <div className="row" key={`guess-${i}`}>
          {guess.map((box, j) => (
            <LetterBox
              key={j}
              letter={box.letter}
              status={box.solution}
              animating={box.animating}
              delay={j} // importante para animar en secuencia
            />
          ))}
        </div>
      ))}

      {/* Palabra que el usuario está escribiendo */}
      {showCurrentRow && (
        <div className="row" key="currentWord">
          {[...Array(wordLength)].map((_, i) => (
            <LetterBox key={i} letter={currentWord[i] || ""} />
          ))}
        </div>
      )}

      {/* Filas vacías restantes */}
      {[...Array(Math.max(emptyRows, 0))].map((_, i) => (
        <div className="row" key={`empty-${i}`}>
          {[...Array(wordLength)].map((_, j) => (
            <LetterBox key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}