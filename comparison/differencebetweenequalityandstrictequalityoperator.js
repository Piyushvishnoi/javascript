function myfun(a, b) {
  if (a == b) {
    return true;
  } else return false;
}
function myfun1(a, b) {
  if (a === b) {
    return true;   
  } else return false;
}
console.log(myfun(10, "10"));
console.log(myfun1(10, "10"));
