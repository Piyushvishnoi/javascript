var myvar = "global";
function fun1() {
  var myvar = "local";
  return myvar;
}
console.log(fun1());
console.log(myvar);
