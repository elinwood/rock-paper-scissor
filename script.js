function converter(input) {
    if (input === "rock") {
        return "1";
    } else if (input === "paper") {
        return "2";
    } else if (input === "scissors") {
        return "3";
    } else if (input === "1" || input === "2" || input === "3") {
        return input        
    } else { 
        return "Input Error"
    }
}

function convertBack (input) {
    if (input === "1") {
        return "rock"
    } else if (input === "2") {
        return "paper"
    } else if (input === "3") {
        return "scissors"
    } else {
        return "invalid"
    }

}

function getHumanChoice () {
    let humanChoice = prompt('Please input either "rock", "paper" or "scissors", or 1 (rock), 2 (paper) or 3 (scissors)')
    
    if (humanChoice === null) {
        return "Input Error"
    }

    // Converts string to numeric choice
    humanChoice = humanChoice.toLowerCase();
    return converter(humanChoice);

}

function getCompChoice() {
    let compRan = 3 * Math.random();
    compRan = Math.ceil(compRan);
    return String(compRan)
}

let humanScore = 0
let compScore = 0
let round = 0
let maxRound = 5

function playRound() {

    round++;
    let humanChoice = getHumanChoice();
    let compChoice = getCompChoice();
    let winner = ""


    if (humanChoice === "Input Error") {
        console.log("Error: Invalid Input. Please enter a valid choice");
        round--;        
        if (confirm("Do you want to exit?")) {
             console.log(
            "You exited early" + "\n" +
            "Round # " + round + " Human: " + humanScore + " Computer: " + compScore
            );
            return true;
         } else {
            return false;            
         }
    }

    if ( (humanChoice === "1" && compChoice === "2") || 
    (humanChoice === "2" && compChoice === "3") ||
    (humanChoice === "3" && compChoice === "1")) {
        winner = "Computer";
        compScore++;
    }
    else if (humanChoice === compChoice) {
        winner = "No One"
        round = round - 1
    }
    else {
        winner = "Human"
        humanScore++;
    }
    
    console.log(
    "Your Choice: " + convertBack(humanChoice) + "\n" +
    "Computer Choice: " + convertBack(compChoice) + "\n" +
    winner + " wins!" + "\n" + 
    "Round # " + round + " Human: " + humanScore + " Computer: " + compScore)
    
}

while (round < maxRound) {
    let continueGame = playRound();
    if (continueGame) {
        break;
    }
};