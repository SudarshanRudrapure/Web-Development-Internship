function greet(city){
    console.log(this.name + " from " + city);
}

let person = {
    name: "Praveen"
};

greet.apply(person, ["Mysore"]);