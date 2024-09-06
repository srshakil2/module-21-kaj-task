function number(num) {
  let sum = 0;
  if (num % 2 === 1) {
    sum = num * 2;
  } else {
    sum = num / 2;
  }
  return sum;
}
const nums = number(50);
console.log(nums);
