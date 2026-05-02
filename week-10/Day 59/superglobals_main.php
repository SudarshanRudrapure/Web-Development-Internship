<!DOCTYPE html>
<html>
<head><title>PHP Superglobals</title></head>
<body>
<h2>Superglobals Demo</h2>
<?php
//////// GLOBALS
$num1 = 50;
$num2 = 10;

function multiply(){
    $GLOBALS['result'] = $GLOBALS['num1'] * $GLOBALS['num2'];
}

multiply();
echo "<b>Global Multiply:</b> " . $GLOBALS['result'] . "<br>";

function add($value){
    return $GLOBALS['result'] + $value;
}
echo "<b>Global Add:</b> " . add(50) . "<br><br>";

////////// SERVER
echo "<b>File Path:</b> " . $_SERVER['PHP_SELF'] . "<br>";
echo "<b>Server Name:</b> " . $_SERVER['SERVER_NAME'] . "<br>";
?>

<hr>
<form method="get">
    <h2>GET Form</h2>
    <input type="text" name="input-1" placeholder="Username">
    <input type="email" name="input-2" placeholder="Email">
    <button type="submit">Submit GET</button>
</form>

<?php
if (isset($_GET["input-1"]) && isset($_GET["input-2"])){
    echo "Welcome " . htmlspecialchars($_GET["input-1"]) . "! Your email is " . htmlspecialchars($_GET["input-2"]);
}
?>

<hr>
<form method="post">
    <h2>POST Form</h2>
    <input type="text" name="input-3" placeholder="Enter something">
    <button type="submit">Submit POST</button>
</form>

<?php
if (isset($_POST["input-3"])){
    echo "You posted: " . htmlspecialchars($_POST["input-3"]);
}
?>
</body>
</html>