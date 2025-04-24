<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
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
>>>>>>> f81e907280ace588437a5652cdb7147fe1a5e6c8
  )
}

export default App
