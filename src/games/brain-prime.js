import startGame from '../index.js';
import randomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = randomNumber(1, 100);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => startGame(task, generateRound);

export default primeGame;
