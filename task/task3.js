function markAvg(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
    number++;
  }
  let result = sum / 3;
  return result;
}

const nms = [220, 494, 99];
const totals = markAvg(nms);
console.log("The result is = ", totals);
// 813/3=271
