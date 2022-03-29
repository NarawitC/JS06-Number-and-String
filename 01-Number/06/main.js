function random(min, max) {
  let result = 0;
  result = Math.random() * (max - min) + min;

  return result;
}

random(3, 6);
