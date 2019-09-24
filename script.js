const fs = require('fs');

fs.readFile('./databases/OpenTaal-210G-basis-gekeurd.txt', (err, data) => {
  if (err) throw err;
  data += '';

  let words = data.split('\n');

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const randomWord = getRandomWord();

  console.log(randomWord);
});
