import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import './css/App.css';

function App() {
  const [players, setPlayers] = useState([]);


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
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
