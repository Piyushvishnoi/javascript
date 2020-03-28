function reusablefunction() {
  console.log("hello world");
}
reusablefunction();
//function with argument
function ourreusablefunction(a, b) {
  console.log(a + b);
}
ourreusablefunction(10, 2);
//function got reused
reusablefunction();
