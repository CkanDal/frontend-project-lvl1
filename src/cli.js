import readlineSync from 'readline-sync';

const name = () => {
  const getUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUser}!`);
};

export default name;
