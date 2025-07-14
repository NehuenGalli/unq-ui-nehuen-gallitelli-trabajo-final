import "./LetterBox.css";

export default function LetterBox({ letter = "", status = "" }) {
  return (
    <div className={`letter-box ${status}`}>
      {letter}
    </div>
  );
}