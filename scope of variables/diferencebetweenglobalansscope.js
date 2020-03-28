var myvar = "global";
function fun1() {
  var myvar = "local";
  return myvar;  //here local scope will have more precedence over global scope
}
console.log(fun1());
console.log(myvar);
