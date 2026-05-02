<?php
session_start(); // Always start session to access data
?>
<!DOCTYPE html>
<html>
<body>
    <h2>User Dashboard</h2>
    <?php
    if(isset($_SESSION["stored_user"])){
        echo "<h3>Hello, " . htmlspecialchars($_SESSION["stored_user"]) . "!</h3>";
        echo "The server remembered your name from the previous page.";
    } else {
        echo "No session found. Please <a href='session_start.php'>login here</a>.";
    }
    ?>
    <br><br>
    <a href="session_start.php">Go back to Login</a>
</body>
</html>