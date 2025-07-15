import "./spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinner-text">Cargando...</p>
    </div>
  );
}