function odd_even(val) {
  // logic :: I will check the remainder of val   - Done
  // if remainder= 0  then it will even
  // else  it will odd.
  let rem = val % 2;
  if (rem == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(odd_even(11));
