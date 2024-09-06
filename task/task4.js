function sting(menu) {
  let x = 0;
  for (let str of menu) {
    if (str === "2") {
      x++;
    }
  }
  return x;
}
let m = "234234532534254";
let i = sting(m);
console.log(i);
