// Working with Objects
            // Objects can also contain functions called methods.

let person = {
    name: "Sudarshan",

    greet: function(){
        console.log("Welcome " + this.name);
    }

};
person.greet();

// Output
//      Welcome Sudarshan