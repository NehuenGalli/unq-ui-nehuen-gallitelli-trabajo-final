import "./selectedDifficulty.css"

export default function SelectedDifficulty ({selectedDifficulty, onReset, onPlay}) {

    return (
        <div className="container">
            <p className="difficultySelect">Selected difficulty: {selectedDifficulty.name}</p> 
            <button className="button play-button" onClick={onPlay}> 
                Play
            </button>
            <button className="button reset-button" onClick={() => onReset(null)}>
                Change difficulty
            </button>
        </div>
    )
}