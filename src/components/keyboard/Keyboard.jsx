import "./Keyboard.css";

const KEYS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"]
];

export default function Keyboard({ onKeyPress, keyStatuses }) {
  return (
    <div className="keyboard">
      {KEYS.map((row, i) => (
        <div key={i} className="key-row">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`key 
                ${key === "ENTER" ? "enter" : ""} 
                ${key === "⌫" ? "backspace" : ""} 
                ${keyStatuses[key] || ""}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}