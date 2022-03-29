function twoDecimal(x) {
  x = x.toFixed(3);
  let result;
  x = x.toString();
  // console.log(x)
  let location = x.toString().indexOf('.');
  // console.log(location)
  x.length;
  // console.log(x.length)
  let string = '';
  for (let k = 0; k <= location + 2; k++) {
    string += x[k];
    // console.log(string)
  }
  console.log(string);
}

twoDecimal(5.1);
twoDecimal(10);
twoDecimal(3.1289);
