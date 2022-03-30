function findProhibitedWord(str) {
  str = str.toLowerCase();
  if (str.includes('xxx') || str.includes('sex') || str.includes('porn')) {
    return true;
  } else {
    return false;
  }
}
