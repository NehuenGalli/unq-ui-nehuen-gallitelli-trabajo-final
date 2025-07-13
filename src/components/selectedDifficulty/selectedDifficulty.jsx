import "./selectedDifficulty.css"

export default function SelectedDifficulty ({selectedDifficulty, onReset, onPlay}) {

    return (
        <div className="container">
            <p className="difficultySelect">Dificultad seleccionada: {selectedDifficulty.name}</p> 
            <button className="button play-button" onClick={onPlay}> 
                Jugar
            </button>
            <button className="button reset-button" onClick={() => onReset(null)}>
                Cambiar dificultad
            </button>
        </div>
    )
}