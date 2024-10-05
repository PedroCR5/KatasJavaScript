const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(words) {
  let word = words[0];
  for (i = 1; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word;
}

let longestWord = findLongestWord(avengers);
console.log(longestWord);