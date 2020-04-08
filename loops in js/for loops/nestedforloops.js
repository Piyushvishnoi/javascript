function multiplyall(arr) {
  var product = 1;
  //loop inside loop
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyall([
  [1, 3],
  [2, 1],
  [2, 1, 2],
]);
console.log(product);
