
class Car {
  constructor(name){
  this.name = name;
  }

  printName(){
    console.log(this.name);
  }
}

var a = new Car('volvo');
console.log(a);
a.printName();
