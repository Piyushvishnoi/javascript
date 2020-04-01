function myfun(number) {
  switch (number) {
    case 1:
      console.log("I am mad");
      break;
    case 2:
      console.log("I am fully mad");
      break;
    default:     //means any no other than 1 and 2 will fall under this case
      console.log("I am alright");
  }
}
myfun(8);
