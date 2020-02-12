let fruits=['banana','apple','keenu','pineapple'];
//another way
let fruits1=new Array('banana','apple','keenu','pineapple');
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
fruits[1]='watermelon';
console.log(fruits.join(' * '));
console.log('toString',fruits.toString());
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);
console.log(fruits[4]);
fruits[fruits.length]='new fruit'; //same as push
console.log(fruits);
fruits.shift(); // removes first element from the list
console.log(fruits);
fruits.unshift('New fruit');
console.log(fruits);