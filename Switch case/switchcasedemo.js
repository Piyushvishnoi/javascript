function myfun(number) {
  switch (number) {     //all below cases will check for the bracket inside number.
    case 1:
      console.log("I am mad");
      break;
    case 2:
      console.log("I am fully mad");
      break;
    default:     //means any no other than 1 and 2 will fall under this case i.e default case
      console.log("I am alright");
  }
}
myfun(8);
