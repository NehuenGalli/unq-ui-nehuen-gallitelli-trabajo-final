import "./difficultyLIst.css"

export default function DifficultyList({ difficulties, onSelect}) {
    return (
        <div className="container">
            <ul>
                {difficulties.map((difficulty) => (
                    <li className="item-list" key={difficulty.id}>
                        <button className="difficulty-button" onClick={() => onSelect(difficulty)}>
                            {difficulty.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}