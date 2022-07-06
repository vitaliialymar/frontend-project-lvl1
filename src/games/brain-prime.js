import { startGame, randomNumber } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isItPrime = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const round = () => {
  const num = randomNumber(0, 100);
  const question = `Question: ${num}`;
  const correctAnswer = isItPrime(num);
  return [question, correctAnswer];
};

const primeGame = () => startGame(task, round);

export default primeGame;
