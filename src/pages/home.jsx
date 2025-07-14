import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { getDifficulty, getSession,  } from '../services/wordApi';
import DifficultyList from '../components/difficultyList/difficultyLIst';
import SelectedDifficulty from '../components/selectedDifficulty/selectedDifficulty';


export default function HomePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingDifficulties, setLoadingDifficulties] = useState(false);
    const [difficulties, setDifficulties] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const fetchDifficulties = async () => {
        try { 
            setLoadingDifficulties(true);
            const res = await getDifficulty(); 
            setDifficulties(res); 
            console.log(JSON.stringify(res) + "En HomePage.jsx");
            setLoadingDifficulties(false); 
        } catch (error) {
            console.error("Error fetching difficulties:", error);
        }
    }

    const handlepLay = async () => {
        try {
            const session = await getSession(selectedDifficulty.id);
            navigate(`/game/${session.sessionId}`);
            localStorage.setItem("session", JSON.stringify(session));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDifficulties();
    }, []);

    return (
        <div>
            {/* Hacer un componente para el titulo y la foto */}
            <h1 className="title">Wordle</h1>
            <div>
                {loadingDifficulties ? (
                    <p>Cargando dificultades...</p> 
                ) : selectedDifficulty ? (
                    <SelectedDifficulty selectedDifficulty={selectedDifficulty} onReset={setSelectedDifficulty} onPlay={handlepLay}/>
                ) : (
                    <DifficultyList difficulties={difficulties} onSelect={setSelectedDifficulty}/>
                )}
            </div>
        </div>
    );
}