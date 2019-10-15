const fs = require("fs");

fs.readFile("./databases/OpenTaal-210G-basis-gekeurd.txt", (err, data) => {
  if (err) throw err;
  data += "";

  let words = data.split("\n");

  function getRandomWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord.length > 4) {
      console.log(randomWord);
    }
  }
  getRandomWord();
});
