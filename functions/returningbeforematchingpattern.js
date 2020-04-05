function myFun(number) {
  //returning undefined values before matching actual pattern
  if (number > 5 && number < 10) {
    return undefined;
  } else {
    if (number == 8) {
      return "yes number is 8";
    } else {
      return "no number is not 8";
    }
  }
}

console.log(myFun(9));
