// Class Constructor
// A constructor is a special method used to initialize object values.
// The constructor runs automatically when object is created.
/*
Syntax
class ClassName {

    constructor(parameters){

    }

}
    */
// Constructor Example
class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

}

let s1 = new Student("Sudarshan", 21);
console.log(s1);