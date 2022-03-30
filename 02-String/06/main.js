function extractCurrencyValue(string, rate) {
  string = string.substring(1);
  // console.log(string)
  num = +string;
  return num * rate;
}
extractCurrencyValue('$120', 30);
