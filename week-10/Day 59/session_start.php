<?php
session_start(); 

// 1. Check if the form was submitted BEFORE any HTML starts
if(isset($_POST["login"])){
    $_SESSION["stored_user"] = $_POST["user_name"];
    
    // Now this will work because no HTML has been sent yet!
    header("Location: session_display.php");
    exit(); 
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login Page (Session Start)</h2>
    <form method="post">
        <input type="text" name="user_name" placeholder="Enter your name" required>
        <button type="submit" name="login">Login</button>
    </form>
</body>
</html>