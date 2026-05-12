class Employee {

    constructor(name){
        this.name = name;
    }

    greet(){
        console.log("Hello " + this.name);
    }

}

let emp1 = new Employee("Sudarshan");

emp1.greet();

//Output : Hello Sudarshan