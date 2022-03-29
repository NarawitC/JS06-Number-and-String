function dice() {
  let result1 = 0;
  function random(min, max) {
    let result = 0;
    result = Math.random() * (max - min) + min;

    return result;
  }
  result1 = random(0, 6);
  result1 = Math.floor(result1);
  return result1 + 1;
}
dice();
