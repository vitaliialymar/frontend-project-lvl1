import { startGame, randomNumber } from '../index.js';

const task = 'What number is missing in the progression?';

const randomProgression = (first, step) => {
  const progLength = randomNumber(5, 10);
  const progression = [];
  for (let i = 0; i < progLength; i += 1) {
    const result = first + (step * i);
    progression.push(result);
  }
  return progression;
};

const round = () => {
  const num = randomNumber(0, 100);
  const progStep = randomNumber(1, 10);
  const gameProgression = randomProgression(num, progStep);
  const randIndex = Math.floor(Math.random() * gameProgression.length);
  const randItem = gameProgression[randIndex];
  gameProgression[randIndex] = '..';

  const question = gameProgression.join(' ');
  const correctAnswer = `${randItem}`;
  return [question, correctAnswer];
};

const progressionGame = () => startGame(task, round);

export default progressionGame;
