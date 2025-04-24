import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import SinglePlayer from './components/SinglePlayer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './css/App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState(null);

  return (
    <div>
      <Navbar
      />
      <Routes>
        <Route
          path='/'
          element={ <Home
              players={players}
            /> 
          }
        />
        <Route
          path='/playerList'
          element={
            <PlayerList
              players={players}
              setPlayers={setPlayers}
              setSinglePlayer={setSinglePlayer}
            />
          }
        />
        <Route
          path='/singlePlayer/:id'
          element={
            <SinglePlayer 
            singlePlayer={singlePlayer}
            setSinglePlayer={setSinglePlayer}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
