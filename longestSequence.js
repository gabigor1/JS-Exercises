const longestSequence = (word) => {
  word = word.toLowerCase();
  let count = 1;
  let max = 0;
  let maxChar;
  
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++;
      if (count > max) {
        max = count;
        maxChar = word[i - 1];
      }
    } else {
      count = 1;
    }
  }
  return { [maxChar]: max };
}

module.exports = {
  longestSequence
}