const sumUpTo = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumUpTo(3));
console.log(sumUpTo(100));
console.log(sumUpTo(100000));

console.time('sumUpTo');
sumUpTo(1_000_000);
console.timeEnd('sumUpTo');
