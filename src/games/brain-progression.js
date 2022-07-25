import startGame from '../index.js';
import randomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const generateProgression = () => {
  const numStart = randomNumber(0, 100);
  const progStep = randomNumber(1, 10);
  const progLength = randomNumber(5, 10);
  const progression = [];
  for (let i = 0; i < progLength; i += 1) {
    const result = numStart + (progStep * i);
    progression.push(result);
  }
  return progression;
};

const generateRound = () => {
  const gameProgression = generateProgression();

  const randIndex = randomNumber(0, gameProgression.length - 1);
  const randItem = gameProgression[randIndex];
  gameProgression[randIndex] = '..';
  const question = gameProgression.join(' ');

  const correctAnswer = String(randItem);
  return [question, correctAnswer];
};

const progressionGame = () => startGame(task, generateRound);

export default progressionGame;
