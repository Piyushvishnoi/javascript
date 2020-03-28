var myGlobal = 10;
function myFunction() {
  var myVar = 2;
}
function myFunction1() {
  myVar1 = 2;
  //console.log("my variable is" + myVar);
  console.log("my global variable is" + myGlobal);
}
myFunction();
myFunction1();
