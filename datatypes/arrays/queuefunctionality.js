function myQueue(arr, item) {
  arr.push(item);
  return arr.shift();
}
myarr = [1, 2, 3, 4, 5];
console.log("before any operation" + JSON.stringify(myarr));
console.log(myQueue(myarr, 6));
console.log("before any operation" + JSON.stringify(myarr));
