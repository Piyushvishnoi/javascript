function myfun(a, b) {
  //in equality operator, we can have type conversion and hence string and number can be compared
  if (a == b) {
    return true;
  } else return false;
}
function myfun1(a, b) {
  //here we don't have type conversion
  if (a === b) {
    return true;
  } else return false;
}
console.log(myfun(10, "10"));
console.log(myfun1(10, "10"));
