/* Practice Example

Create a `Student` constructor with:

* name
* course

Methods:

* `introduce()` → "Hi, I am ___"
* `study()` → "I am studying ___"

*/

function Student(name, course) {
    this.name = name;
    this.course = course;

    this.introduce = function() {
        console.log("Hi, I am " + this.name);
    };

    this.study = function() {
        console.log("I am studying " + this.course);
    };
}

var s1 = new Student("Sudarshan", "JavaScript");

s1.introduce();
s1.study();


/*
Output:
Hi, I am Sudarshan
I am studying JavaScript
*/


/*
✔ Constructor = creates objects
✔ `this` = current object
✔ `new` = must use
✔ Methods = object functions
✔ Prototype = best practice
*/
