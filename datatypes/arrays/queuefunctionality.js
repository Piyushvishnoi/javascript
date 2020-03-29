function myQueue(arr, item) {
  //this will push an item in last of array 
  arr.push(item);
  //this will delete an element at the beginning of array 
  return arr.shift();
}
myarr = [1, 2, 3, 4, 5];
console.log("before any operation" + JSON.stringify(myarr));
console.log(myQueue(myarr, 6));
console.log("before any operation" + JSON.stringify(myarr));
