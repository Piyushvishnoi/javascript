function myFun(number) {
  //if-else chain
  if (number == 4) { 
    console.log("Yes it is 4");
  } else if (number == 38) { 
    console.log("Yes it is 38");
  } else {
    console.log("No it is neither 38 nor 4");
  }
}
myFun(38);
//replacing if-else chain with switch case 
function myFun1(number) {
  switch (number) {
    case 4:
      console.log("Yes it is 4");
      break;
    case 38:
      console.log("Yes it is 38");
      break;
    default:
      console.log("No it is neither 38 nor 4");
      break;
  }
}
myFun1(3);
