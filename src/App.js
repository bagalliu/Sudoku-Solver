import React from 'react';
import './App.css';

function App() {
  // Initialize an empty Sudoku grid
  const grid = new Array(9).fill("").map(() => new Array(9).fill(""));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Solver</h1>
        <div className="sudoku-grid">
          {grid.map((row, i) => (
            <div key={i} className="sudoku-row">
              {row.map((val, j) => (
                <input key={j} className="sudoku-cell" maxLength="1" />
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
