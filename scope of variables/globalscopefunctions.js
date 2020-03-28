var myGlobal = 10;
function myFunction() {
  var myVar = 2;  //we used "var" and hence its scope is local
}
function myFunction1() {
  myVar1 = 2;  //this will have a by default global scope as "var" is not used 
  //console.log("my variable is" + myVar);
  console.log("my global variable is" + myGlobal);
}
myFunction();
myFunction1();
