import { startGame, randomNumber } from '../index.js';

const task = 'What number is missing in the progression?';

const randomProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const result = first + (step * i);
    progression.push(result);
  }
  return progression;
};

const round = () => {
  const num = randomNumber(0, 100);
  const progStep = randomNumber(1, 10);
  const progLength = randomNumber(5, 10);
  const gameProgression = randomProgression(num, progStep, progLength);
  const randIndex = randomNumber(0, progLength - 1);
  const randItem = gameProgression[randIndex];
  gameProgression[randIndex] = '..';

  const question = gameProgression.join(' ');
  const correctAnswer = `${randItem}`;
  return [question, correctAnswer];
};

const progressionGame = () => startGame(task, round);

export default progressionGame;
