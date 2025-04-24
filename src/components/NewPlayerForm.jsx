// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../API/index.js';
const { newPlayerForm } = api;

function NewPlayerForm({ setRefresh, setCreateNewPlayer, createNewPlayer }){
    const navigate = useNavigate();    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPlayerFormAPI = async () => {
            const response = await newPlayerForm(createNewPlayer);
            console.log(response);
            setRefresh(prev => !prev);
        }
        newPlayerFormAPI();
        navigate('/playerList');
    }

    return (
        <div className='signup-container'>
            <h1>
                Sign Up Below!
            </h1>
            <div className='form-container'>
                <form className='form-columns' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-field'>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={createNewPlayer.name}
                        onChange={(e) => setCreateNewPlayer((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        }))
                    }
                        placeholder='Puppy name here'
                    />
                    </div>

                    <div className='form-field'>
                    <label>Breed:</label>
                    <input
                        type='text'
                        name='breed'
                        value={createNewPlayer.breed}
                        onChange={(e) => setCreateNewPlayer((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        }))
                    }
                        placeholder='Enter breed here'
                    />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-field'>
                    <label>Status:</label>
                    <input
                        type='text'
                        name='status'
                        value={createNewPlayer.status}
                        onChange={(e) => setCreateNewPlayer((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        }))
                    }
                        placeholder='bench or field'
                    />
                    </div>

                    <div className='form-field'>
                    <label>Team Id:</label>
                    <input
                        type='text'
                        name='teamId'
                        value={createNewPlayer.teamId}
                        onChange={(e) => setCreateNewPlayer((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        }))
                    }
                        placeholder='Enter team Id here'
                    />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-field'>
                    <label>Picture:</label>
                    <input
                        type='imageUrl'
                        name='imageUrl'
                        value={createNewPlayer.imageUrl}
                        onChange={(e) => setCreateNewPlayer((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        }))
                    }
                        placeholder='Paste image url here (ex: tinyurl.com/puppy)'
                    />
                    </div>
                </div>

                <div className='form-button'>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
                </form>
                {/* <div className='error-container'>
                    {signUpError && <p className='error-message'>{signUpError}</p>}
                </div> */}
            </div>
        </div>
    );
}

export default NewPlayerForm