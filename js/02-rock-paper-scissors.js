// Function to play rock, scissors, paper
function playGame() {
// User makes a choice
let userChoice

while (true) {
    userChoice = prompt ('User makes a choice (rock, scissors, paper)')
    if (userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper') {
        break 
    } else {
        alert ('Invalid choice! Please make a choice (rock, scissors, paper)')
    }
}

// Computer makes a choice
const choices = ['rock', 'scissors', 'paper']
const randomIndex = Math.round(Math.random() * 2) // 0, 1, 2
const computerChoice = choices [randomIndex]

// Determine the winner
let result

if (userChoice === computerChoice) {
    result = `It is a tie! You both choose ${userChoice}.`
} else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
) {
    result = `You win! ${userChoice} beats ${computerChoice}.`
} else {
    result = `You lose! ${computerChoice} beats ${userChoice}`
}

// Display the result
alert (result)
}

// Start the game
playGame()
