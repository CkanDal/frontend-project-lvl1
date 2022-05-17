import readlineSync from 'readline-sync';

export const name = () =>  {
    const getUser = readlineSync.question('May I have your name? ');
   
    console.log('Hello, ' + getUser + '!');
}

