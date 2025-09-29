const words = [
  "TARUN",
  "APPLE",
  "MANGO",
  "GRAPE",
  "PEACH",
  "BERRY",
  "LEMON",
  "PLUMS",
  "PEARS",
];

let gameState = {
  secret: null,
  attempts: 0,
};

exports.generateSecret = (req, res) => {
  const index = words[Math.floor(Math.random() * words.length)];
  gameState.secret = index;
  gameState.attempts = 3;

  res
    .status(200)
    .send(
      `<span style="color:green;">A new secret word <strong>${gameState.secret}</strong> has been generated. Start guessing!</span>`
    );
};

exports.guessWord = (req, res) => {
  // const { word } = req.query;
  const { word } = req.body;

  if (!gameState.secret) {
  return res.status(400).send(
  `<span style="color:red;">Game not started. Please generate a secret word first.</span>`
);
}
  if (!word) {
    return res.status(400).send(
  `<span style="color:orange;">Please provide a word to guess</span>`
);
  }

  if (word.length !== 5) {
    return res
      .status(400)
      .send(`<span style="color:orange;">Word must be 5 letters long</span>`);
  }

  const guess = word.toUpperCase();
  const secret = gameState.secret;
  const feedback = [];

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    if (letter === secret[i]) {
      feedback.push({
        letter,
        status: "correct",
        position: i,
        message: `Letter '${letter}' is correct at position ${i}`,
      });
    } else if (secret.includes(letter)) {
      feedback.push({
        letter,
        status: "present",
        position: null,
        message: `Letter '${letter}' is in the word but in the wrong position`,
      });
    } else {
      feedback.push({
        letter,
        status: "absent",
        position: null,
        message: `Letter '${letter}' is not in the word`,
      });
    }
  }

  gameState.attempts--;

  if (guess === secret) {
    return res
      .status(200)
      .send(
        `<span style="color:green;">🎉 You guessed the secret word!</span>`
      );
  }

  if (gameState.attempts <= 0) {
    const oldSecret = gameState.secret;
    gameState.secret = null;
   return res
     .status(200)
     .send(
       `<span style="color:red;">No attempts left. Game over! The word was <strong>${oldSecret}</strong>.</span>`
     );
  }

 return res.status(200).json({
   message: `<span style="color:blue;">${word} is a wrong guess. Try again!</span>`,
   attemptsLeft: gameState.attempts,
   feedback,
 });
};