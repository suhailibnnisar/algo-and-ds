const sumUpTo = (num) => {
  return (num * (num + 1)) / 2;
};

console.log(sumUpTo(3));
console.log(sumUpTo(100));
console.log(sumUpTo(100000));

console.time('sumUpTo');
sumUpTo(1_000_000);
console.timeEnd('sumUpTo');
