import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../API/index.js';
const { getSinglePlayer } = api;

const SinglePlayer = ({ singlePlayer, setSinglePlayer }) => {
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getSinglePlayerAPI = async () => {
            const response = await getSinglePlayer(id);
            console.log(response);
            setSinglePlayer(response.data.player);
            const devices = await navigator.mediaDevices.enumerateDevices()
            console.log(devices)
        }
        getSinglePlayerAPI();
    }, [id])

    return (
        <div className='single-player-container'>
            {singlePlayer && (
                <div key={singlePlayer.id}>
                    <h1>
                        {singlePlayer.name}
                    </h1>
                    <img
                        className='single-player-img'
                        src={singlePlayer.imageUrl}
                    />
                    <p>
                        <b>Breed:</b> {singlePlayer.breed}
                    </p>
                    <p>
                        <b>Team:</b> {singlePlayer.breed}
                    </p>
                    <p>
                        <b>Status:</b> {singlePlayer.status}
                    </p>
                    <p>
                        <b>Team Id:</b> {singlePlayer.teamId}
                    </p>
                </div>
            )}
            <button onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

export default SinglePlayer