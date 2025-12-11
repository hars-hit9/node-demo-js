const obj={
    name:"harshit",
    age:20,
    address:"kanpur",
    intro(){
    console.log(`my name is ${this.name}`)
    }
};

console.log([obj.name, obj.age, obj.address]);
obj.name="porwal";
console.log([obj.name, obj.age, obj.address]);
obj.intro();



