const readline = require('readline');

var madlib = 'Once upon a time, there was a brave (noun) named (name). He was always ready for an (adjective) adventure. One day, he decided to explore a mysterious (noun) deep in the (noun). As he ventured further, he heard a (adjective) noise coming from the (noun). He cautiously stepped forward, and to his surprise, he found a (adjective) dragon! The dragon had (adjective) eyes and a (adjective) tail. Together, they traveled the (noun) and had many (adjective) adventures.';

var prompts = madlib.match(/\(noun\)|\(name\)|\(adjective\)/g);
var words = {};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (prompts) {
  let currentPromptIndex = 0;

  function promptUserForWord() {
    if (currentPromptIndex < prompts.length) {
      const prompt = prompts[currentPromptIndex];
      const type = prompt.substring(1, prompt.length - 1); // Extract 'noun', 'name', or 'adjective'
      rl.question(`Enter a ${type}: `, (userWord) => {
        words[type] = userWord;
        currentPromptIndex++;
        promptUserForWord();
      });
    } else {
      rl.close();
      replaceWordsAndPrint();
    }
  }

  promptUserForWord();
}

function replaceWordsAndPrint() {
  function replaceWords(match) {
    return words[match.substring(1, match.length - 1)] || match;
  }

  const filledMadlib = madlib.replace(/\(noun\)|\(name\)|\(adjective\)/g, replaceWords);
  console.log(filledMadlib);
}
