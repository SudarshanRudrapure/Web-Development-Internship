function greet(city){
    console.log(this.name + " from " + city);
}

let person = {
    name: "Sudarshan"
};

greet.call(person, "Bangalore");

//Output: Sudarshan from Bangalore