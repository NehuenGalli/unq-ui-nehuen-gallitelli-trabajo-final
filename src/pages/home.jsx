import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getDifficulty, getSession, } from '../services/wordApi';
import DifficultyList from '../components/difficultyList/difficultyLIst';
import SelectedDifficulty from '../components/selectedDifficulty/selectedDifficulty';
import Header from '../components/header/header';
import Spinner from '../components/spinner/spinner';
import { toast } from 'react-toastify';


export default function HomePage() {
    const navigate = useNavigate();
    const [loadingDifficulties, setLoadingDifficulties] = useState(false);
    const [difficulties, setDifficulties] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const fetchDifficulties = async () => {
        try {
            setLoadingDifficulties(true);
            const res = await getDifficulty();
            setDifficulties(res);
            setLoadingDifficulties(false);
        } catch (error) {
            toast.error("Error fetching difficulties");
        }
    }

    const handlepLay = async () => {
        try {
            const session = await getSession(selectedDifficulty.id);
            navigate(`/game/${session.sessionId}`);
            localStorage.setItem("session", JSON.stringify(session));
        } catch (error) {
            toast.error("Error starting game");
        }
    }

    useEffect(() => {
        fetchDifficulties();
    }, []);

    return (
        <div>
            {<Header />}
            <div>
                {loadingDifficulties ? (
                    < Spinner />
                ) : selectedDifficulty ? (
                    <SelectedDifficulty selectedDifficulty={selectedDifficulty} onReset={setSelectedDifficulty} onPlay={handlepLay} />
                ) : (
                    <DifficultyList difficulties={difficulties} onSelect={setSelectedDifficulty} />
                )}
            </div>
        </div>
    );
}