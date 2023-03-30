import React, { useState } from 'react';

function GuessGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuess = (event) => {
    setGuess(event.target.value);
  };

  const handleCheck = () => {
    const numGuess = parseInt(guess);
    setCount(count + 1);

    if (numGuess === luckyNumber) {
      setMessage(`Congratulations! You guessed the right number in ${count + 1} attempts.`);
    } else if (numGuess < luckyNumber) {
      setMessage('You guessed a smaller number.');
    } else if (numGuess > luckyNumber) {
      setMessage('You guessed a bigger number.');
    }
  };

  return (
    <div>
      <h2>Guess the Lucky Number</h2>
      <p>Guess a number between 1 and 100:</p>
      <input type="number" value={guess} onChange={handleGuess} />
      <button onClick={handleCheck}>Check</button>
      {
    }
  {message && <p>{message}</p>}
</div>
);
}

export default GuessGame;
