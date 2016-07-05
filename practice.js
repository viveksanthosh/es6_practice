class Animal{
constructor(){
    console.log('called 1');
  this.canFly = 'maybe'
  this.alive = true;
}
}

class Bird extends Animal{
  constructor(){
    super();
      console.log('called 2');
      this.canFly = true;
  }
}

class Crow extends Bird {
  constructor(){
    super();
      console.log('called 3');
      this.color = 'black';
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
