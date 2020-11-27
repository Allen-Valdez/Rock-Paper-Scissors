//The following checks the users input to see if its valid
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please input a valid option');
    }
  ;}
  
  //This will generate a random computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  };
  
  //This will determine a winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'bomb') {
    return 'YOU DROPPED A NUKE AND WON!'
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  };
  
  //This will play the game, under userChoice, input your choice
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`Let's get this started! You threw: ${userChoice} and the computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()