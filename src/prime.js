import { name, question, anwer } from './index.js';

const user = name();
question('Answer "yes" if given number is prime. Otherwise answer "no".');
let sum = 0;
const prime = () => {
  const allNum = [];
  const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  for (let i = 2; i <= 200; i += 1) {
    allNum.push(i);
  }
  const index = Math.floor(Math.random() * 71);
  question(`Question: ${allNum[index]}`);
  const answer = anwer();
  if (answer === 'yes' && primeNum.includes(allNum[index]) || answer === 'no' && !(primeNum.includes(allNum[index]))) {
    console.log('Correct!');
    sum += 1;
  } else if (answer === 'yes') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.Let's try again, ${user}!`);
    sum += 4;
  } else if (answer === 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${user}!`);
    sum += 4;
  } else {
    console.log('Only "yes" or "no"');
    sum += 4;
  }
  if (sum === 3) {
    console.log(`Congratulations, ${user}!`);
  } else if (sum < 3) {
    return prime();
  }
  return 12;
};

export default prime;
