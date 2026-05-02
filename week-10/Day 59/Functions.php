<?php

// Function without parameters
function sayHello() {
    echo "Hello World! <br>";
}
sayHello();

// Function with parameters
function add($a, $b) {
    $sum = $a + $b;
    echo "Sum is: $sum <br>";
}
add(10, 20);

// Function with return
function multiply($a, $b) {
    return $a * $b;
}
$result = multiply(5, 4);
echo "Result: $result";

?>