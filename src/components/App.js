import React from 'react';
import BoardContext from '../context/BoardContext.js';
import Players from './Players.js'
import Games from './Games.js'
import Match from './Match'
import "../index.css"

function App() {
  return (
    <BoardContext>
      <div className="container">
        <Players />
        <Match />
        <Games />
      </div>
    </BoardContext>
  );
}

export default App;
