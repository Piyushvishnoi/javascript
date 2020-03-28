var myvar = 23;
function fun1() {
  var myvar1 = 34; //this has a local scope
  console.log(myvar);
}
//console.log(myvar1); since myvar1 has local scope hence can't be accesed
fun1();
