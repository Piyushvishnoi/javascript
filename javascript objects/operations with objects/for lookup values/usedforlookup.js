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
