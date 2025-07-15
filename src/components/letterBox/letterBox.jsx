import "./LetterBox.css";

export default function LetterBox({ letter = "", status = "", animating = false, delay = 0 }) {
  const className = `letter-box ${status} ${animating ? "flip" : ""}`;
  const style = animating ? { animationDelay: `${delay * 0.3}s` } : {};

  return (
    <div className={className} style={style}>
      {letter}
    </div>
  );
}
