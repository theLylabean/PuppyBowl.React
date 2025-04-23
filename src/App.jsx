import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import SinglePlayer from './components/SinglePlayer';
import './css/App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState(null);


  return (
    <div>
      <Routes>
        {/* <Route
          path='/'
          element={ <Home /> }
        /> */}
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
