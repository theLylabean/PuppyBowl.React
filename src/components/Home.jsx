import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../css/home.css';

const Home = ({ players }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    // const {id} = useParams();
    

    const handleChange = (e) => {
        const value = e.target.value;
        const filterPlayers = players.filter((player) => {
            const { name, breed, team } = player;
            return name?.toLowerCase().includes(searchInput.toLowerCase()) ||
            breed?.toLowerCase().includes(searchResults) ||
            team && team.toLowerCase().includes(searchInput.toLowerCase())
        })
        console.log(filterPlayers);
        
        setSearchInput(value);
        setSearchResults(filterPlayers);
    }
    return (
        <div className='home-container'>
            <h1>Welcooooooooooome to the Puppybowl!</h1>
            <p>You'll be able to look through our players and see more information about them, including what team they are on!</p>
            <div className='searchbar-container'>
                <input
                    className='searchbar'
                    placeholder='Search players by name, breed, or team'
                    type='text'
                    id='search'
                    name='search'
                    value={searchInput}
                    onChange={handleChange}
                    onBlur={(e) => {
                        setTimeout(() => {
                            if (
                                dropdownRef.current &&
                                !dropdownRef.current.contains(document.activeElement)
                            ) {
                                setSearchInput('');
                                setSearchResults([]);
                            }
                        }, 150)
                    }}
                    />
                {searchInput.length > 0 && searchResults.length > 0 && (
                    <ul ref={dropdownRef} className='dropdown'>
                        {searchResults && searchResults.map((result) => (
                            <li
                            key={result.id}
                            onMouseDown={() => {
                                setSearchInput('');
                                setSearchResults([]);
                                navigate(`/singlePlayer/${result.id}`)
                            }}
                            >
                                {result.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Home