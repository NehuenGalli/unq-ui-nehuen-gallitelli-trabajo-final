import "./WordBox.css";

export default function WordBox({ attempts, currentGuess, wordLength, maxTries = 6 }) {
  const rows = [];

  for (let i = 0; i < maxTries; i++) {
    let row;

    if (i < attempts.length) {
      row = attempts[i];
    } else if (i === attempts.length) {
      const guessLetters = currentGuess.padEnd(wordLength).split("");
      row = guessLetters.map((letter) => ({ letter, solution: null }));
    } else {

      row = Array.from({ length: wordLength }, () => ({ letter: "", solution: null }));
    }

    rows.push(row);
  }

  return (
    <div className="word-box">
      {rows.map((row, rowIndex) => (
        <div className="word-row" key={rowIndex}>
          {row.map((cell, i) => (
            <div
              key={i}
              className={`letter-box ${
                cell.solution ? cell.solution : ""
              }`}
            >
              {cell.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}