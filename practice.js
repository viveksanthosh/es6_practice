
class Crow {
  constructor(){

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
console.log(a.getName);
