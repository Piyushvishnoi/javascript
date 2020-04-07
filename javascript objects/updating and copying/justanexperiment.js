var myObj = [
    "2528": {
        first: "Piyush",
        second: ["Khushi", "Yash", "Shriyansh"]
    },
    "2529" : {
        first: "Vishnoi",
        second: ["Agrawal", "Gupta", "Porwal"]
    },
];
var mycopiedobj = JSON.parse(JSON.stringify(myObj));
console.log(mycopiedobj);
function myfun()