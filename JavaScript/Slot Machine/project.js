//! Slot Machine

// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect a bet amount
// 4. Spin
// 5. Check if user win
// 6. Give them their winning
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 8,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 50,
  B: 42,
  C: 32,
  D: 25,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt(`Enter a deposit amount: `);
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount, Try Again");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt(`Enter the number of lines to bet on (1-3): `);
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt(
      `You can't bet higher than ${Math.floor(
        balance / lines
      )}, Enter your bet amount: `
    );
    const numberBet = parseFloat(bet);

    if (
      isNaN(numberBet) ||
      numberBet <= 0 ||
      numberBet > Math.floor(balance / lines)
    ) {
      console.log("Invalid bet amount, try again");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];

  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];

  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectSymbol = reelSymbols[randomIndex];

      reels[i].push(selectSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const printRows = (reels) => {
  for (const row of reels) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i !== row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (reels, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = reels[row];
    let allSame = true;

    for (let i = 1; i < symbols.length; i++) {
      if (symbols[i] !== symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log(`You have a balance of $${balance.toFixed(2)}`);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    printRows(reels);
    const winnings = getWinnings(reels, bet, numberOfLines);
    balance += winnings;
    console.log(`You Won $${winnings.toFixed(2)}`);

    if (balance <= 0) {
      console.log("You ran out of money");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n)?");

    if (playAgain.toLowerCase() !== "y") {
      break;
    }
  }

  console.log("Thanks for playing!");
};

game();
