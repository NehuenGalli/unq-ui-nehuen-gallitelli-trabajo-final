import "./header.css";


export default function Header() {
    return (
        <header className="header">
            <div className="header-top-row">
                <h1 className="header-title">WORDLE</h1>
                <img
                    src="Wordle_Logo.svg"
                    alt="Wordle Logo"
                    className="header-logo"
                />
            </div>
            <h2 className="header-subtitle">Seleccione la dificultad</h2>
        </header>
    );
}