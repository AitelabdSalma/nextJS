import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';



const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease-in;
`;


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  animation: ${pulse} 1s ease-in-out infinite;
`;



const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  animation: ${slideInUp} 0.5s ease-in;
`;


const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  animation: ${bounce} 0.5s ease-out;
`;

const slideInDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${slideInDown} 0.5s ease-out;
`;

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGame = () => {
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const guessNumber = parseInt(guess, 10);

    if (guessNumber === number) {
      setMessage('You win!');
    } else if (guessNumber > number) {
      setMessage('Try again! Your guess was too high.');
    } else {
      setMessage('Try again! Your guess was too low.');
    }
  };

  const handlePlayAgain = () => {
    setNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  return (
    <Container>
      <Title>Guess the Number Game</Title>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleGuessSubmit}>
        <Input type="number" value={guess} onChange={handleGuessChange} />
        <Button type="submit">Guess</Button>
      </form>
      {message && <Message>{message}</Message>}
      {message === 'You win!' && <Button onClick={handlePlayAgain}>Play Again</Button>}
    </Container>
  );
};

export default NumberGame;
