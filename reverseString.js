const reverseString = (word) => {
  if (word === '')
    return '';
  else {
    return reverseString(word.slice(1)) + word.charAt(0);
  }
}

module.exports = {
  reverseString
}