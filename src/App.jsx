import React, { useState } from "react";
import "./styles.css"

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guessedNumber = parseInt(guess, 10);
    if (isNaN(guessedNumber)) {
      setMessage("Please enter a valid number.");
    } else {
      setAttempts(attempts + 1);
      if (guessedNumber === targetNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
      } else if (guessedNumber < targetNumber) {
        setMessage("Try a higher number.");
      } else {
        setMessage("Try a lower number.");
      }
    }
  }

  return (
    <div className="app">
      <h1>Gilads Guessing Game</h1>
      <p>Guess a number between 1 and 100.</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
