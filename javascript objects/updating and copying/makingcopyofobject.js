var myObj = [
  {
    first: "Piyush",
    second: ["Khushi", "Yash", "Shriyansh"],
  },
  {
    first: "Vishnoi",
    second: ["Agrawal", "Gupta", "Porwal"],
  },
];
console.log(myObj);
//coping myObj to mycopiedobj
var mycopiedobj = JSON.parse(JSON.stringify(myObj));
console.log(mycopiedobj);
