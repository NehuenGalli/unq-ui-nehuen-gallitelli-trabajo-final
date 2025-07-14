import LetterBox from "../letterBox/letterBox";
import "./board.css"

export default function Board({ guesses, currentWord, wordLength, maxTries = 6 }) {
  const filledRows = guesses.length;
  const emptyRows = maxTries - filledRows - 1;

  return (
    <div className="board">
      {guesses.map((guess, i) => (
        <div className="row" key={`guess-${i}`}>
          {guess.map((box, j) => (
            <LetterBox key={j} letter={box.letter} status={box.solution} />
          ))}
        </div>
      ))}

      {filledRows < maxTries && (
        <div className="row" key="currentWord">
          {[...Array(wordLength)].map((_, i) => (
            <LetterBox key={i} letter={currentWord[i] || ""} />
          ))}
        </div>
      )}

      {[...Array(emptyRows > 0 ? emptyRows : 0)].map((_, i) => (
        <div className="row" key={`empty-${i}`}>
          {[...Array(wordLength)].map((_, j) => (
            <LetterBox key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}