import { useEffect } from 'react';
import api from '../API/index.js';
const { getPlayers } = api;

const PlayerList = ({ players, setPlayers }) => {
    useEffect(() => {
        const getPlayerAPI = async () => {
            const response = await getPlayers();
            console.log(response);
            setPlayers(response.data.players);
        }
        getPlayerAPI();
    }, [])

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
                    const {id, name, breed, status, imageUrl, teamId} = player;
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
                            <p>
                                {breed}
                            </p>
                            <p>
                                {status}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayerList