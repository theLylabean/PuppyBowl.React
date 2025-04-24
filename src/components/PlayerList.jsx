import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../API/index.js';
const { getPlayers } = api;

const PlayerList = ({ players, setPlayers, setSinglePlayer, refresh }) => {
    const navigate = useNavigate();
    const handleClick = (player) => {
        setSinglePlayer(player);
        navigate(`/singlePlayer/${player.id}`);
    };
    
    
    useEffect(() => {
        const getPlayerListAPI = async () => {
            const response = await getPlayers();
            console.log(response);
            setPlayers(response.data.players);
        }
        getPlayerListAPI();
    }, [refresh]);

    return (
        <div className='playerList-container'>
            <div className='header-container'>
                <h1>
                    Player List
                </h1>
                <p>** Info about this list **</p>
            </div>
            <div className='player-card'>
                {players.map((player) => {
                    const {id, name, imageUrl} = player;
                    return (
                        <div key={id}>
                            <h2>
                                {name}
                            </h2>
                            <img
                                className='player-img'
                                src={imageUrl}
                            />
                            <br />
                            <button onClick={() => handleClick(player)}>
                                More Info
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayerList