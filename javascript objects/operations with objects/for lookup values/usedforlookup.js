//objects are used to look up. values in a function
function myFun(value) {
  var result = "";
  var lookup = {
    Piyush: "Vishnoi",
    omji: "Shukla",
    Ameesha: "Agrawal",
  };
  result = lookup[value];
  return result;
}
console.log(myFun("Piyush"));
