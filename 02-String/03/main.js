const ucFirst = (str) => {
  result = '';
  result += str[0].toUpperCase();
  str = str.slice(1, str.length);
  result += str;
  return result;
};
ucFirst('sfsf');
