// define user input
const getUserChoice = (userInput) => {
	let userInput = prompt('Enter');
	if (userInput === 'human') {
		return userInput;
	} else if (userInput === 'Bear') {
		return userInput;
	} else if (userInput === 'gun') {
		return userInput;
	} else {
		alert('bad choice choose : human, bear ,gun');
	}
};

// define computer choice
const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		return 'human';
	} else if (randomNumber === 1) {
		return 'bear';
	} else {
		return 'gun';
	}
};

// determine the winner

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return 'its a tie';
	} else if (userChoice === 'human') {
		if (computerChoice === 'bear') {
			return 'the bear has torn you apart';
		} else {
			return 'you have disarmed the gun';
		}
	} else if (userChoice === 'bear') {
		if (computerChoice === 'human') {
			return 'you tore him apart like a paper';
		} else {
			return 'you have been shot by a gun';
		}
	} else if (userChoice === 'gun') {
		if (computerChoice === 'human') {
			return 'your gun has been disarmed';
		} else {
			return 'you shot the bear down';
		}
	}
};

// start the game
const playGame = () => {
	const promptUserChoice = prompt('please choose : bear, human, gun : ');
	let userChoice = getUserChoice(promptUserChoice);
	const computerChoice = getComputerChoice();
	const winner = determineWinner(userChoice, computerChoice);
};
