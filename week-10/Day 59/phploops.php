<?php

// 1. for loop
for ($i = 1; $i <= 5; $i++) {
    echo "For Loop: $i <br>";
}

// 2. foreach loop
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
    echo "Color: $color <br>";
}

// 3. while loop
$x = 1;
while ($x <= 3) {
    echo "While Loop: $x <br>";
    $x++;
}

// 4. do-while loop
$y = 1;
do {
    echo "Do While Loop: $y <br>";
    $y++;
} while ($y <= 3);

?>