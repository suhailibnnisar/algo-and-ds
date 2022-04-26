function getCharCount(str: string) {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();

    // NOTE: Regex are not the fastest way to check the characters
    // we should try to use ASCII code range to determine whether the char is lowercase or not
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

console.log(getCharCount('Hello h!'));
