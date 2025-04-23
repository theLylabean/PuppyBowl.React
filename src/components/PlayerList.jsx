import api from './index.js';
const { getPlayers } = api;

const PlayerList = ({ players }) => {
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
                    
                })}
            </div>
        </div>
    )
}