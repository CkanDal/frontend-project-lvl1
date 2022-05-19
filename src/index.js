import readlineSync from 'readline-sync';

const name = () => {
  console.log('Welcome to the Brain Games!');
  const getUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUser}!`);
  return getUser;
};

const question = (n) => {
    console.log(n);
};

const anwer = () => {
  const answa = readlineSync.question('Your answer: ');
  return answa;
};

const randomNumber1 = () => {
  let Number1 = Math.floor(Math.random() * 10);
  return Number1;
};
const randomNumber2 = () => {
let Number2 = Math.floor(Math.random() * 10);
return Number2;
};

const Congratulations = () => {
  sum = 0;
  if (sum === 3) {
    console.log(`Congratulations, ${user}!`);
  }
}

export {name, question, anwer,randomNumber1, randomNumber2, Congratulations};