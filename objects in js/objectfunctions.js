objectdemo={first:'Piyush',
            last:'Vishnoi',
            age:19,
            height:173,
            studentinfo:function(){ return this.first+this.last +'\n'+ this.age +'\n'+ this.height}
}
console.log(objectdemo.studentinfo());
