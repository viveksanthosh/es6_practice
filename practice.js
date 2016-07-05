class Animal{
constructor(){
  this.canFly = 'maybe'
  this.alive = true;
  }
  call(){
    console.log('called 1');
  }
}

class Bird extends Animal{
  constructor(){
    super();
      this.canFly = true;
  }
  call(){
    console.log('called 2');
  }
}

class Crow extends Bird {
  constructor(){
    super();
    super.call()
      this.color = 'black';
  }
  call(){
    console.log('called 3');
  }
  set setName(name){
    this.name = name;
  }
  get getName(){
    return this.name;
  }
}

var a = new Crow();
a.setName = "Kaka"
console.log(a.call());
