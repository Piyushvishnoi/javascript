function myfun(number) {
  if (number !== 2) {
    return "not equal";
  } else return "equal";
}
//here type conversion will not take place hence string and number cannot be compared 
console.log(myfun("2"));
console.log(myfun(2));
console.log(myfun(3));
