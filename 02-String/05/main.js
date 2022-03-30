function truncate(str, length) {
  let result = '';
  let plusStr = '';
  if (length < str.length) {
    plusStr = '…';
  }
  result = str.substring(0, length - 1);
  result += plusStr;
  return result;
}
// truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
// truncate("Hi everyone!", 20); // Hi everyone!
