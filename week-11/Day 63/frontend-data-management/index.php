<?php 
include_once 'db-inc.php'; 
?> 

<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta charset="utf-8">
<title>Joe's Coaches</title>
<link rel="stylesheet" href="css/style.css">
</head>

<body>

<div class="nav-wrapper">
<nav>
<ul class="nav-list">
<img id="icon" src="img/icon2.png">
<li><a href="index.html">Account</a></li>
<li><a href="#">Logout</a></li>
</ul>
</nav>
</div>

<div class="employees">
<h2>Employees</h2>
<div class="employee-list">

<?php 
$sqlStatement = "SELECT employees.firstName, employees.lastName, 
employees.jobTitle, departments.departmentName, employees.email, employees.salary 
FROM employees 
JOIN departments 
ON employees.departmentCode = departments.departmentCode;";

$queryResult = mysqli_query($dbConnection,$sqlStatement);
$resultCheck = mysqli_num_rows($queryResult);

$currency = "£";

if($resultCheck > 0){
    while($row = mysqli_fetch_assoc($queryResult)){
        echo "<li>
        <div class='employee-card'>
        <img class='user-img' src='img/default.png'>
        <span>
        <div class='employment-details'>
        <span class='name-format'>".$row['firstName']."</span>
        <span class='name-format'>".$row['lastName']."</span><br>
        <span>".$row['jobTitle']."</span><br>
        <span>".$row['departmentName']."</span><br>
        <span>".$row['email']."</span><br>
        <span>".$currency.$row['salary']."</span>
        </div>
        </span>
        </div>
        </li>";
    }
}
?>

</div>
</div>

<div class="interviews">
<h2>Upcoming Interviews</h2>

<li>
<div class="list-item">
<h3>Marketing</h3>
<p>Social Media Content Specialist</p>
<button class="accept-btn">Accept</button>
<button class="reject-btn">Reject</button>
</div>
</li>

</div>

<!-- Employee Modal -->
<div id="employeeModal">
<form action="submit.php" method="POST">
<input type="text" name="employee-number" placeholder="Employee Number">
<input type="text" name="first-name" placeholder="First Name">
<input type="text" name="last-name" placeholder="Last Name">
<input type="text" name="position" placeholder="Position">
<input type="text" name="department" placeholder="Department">
<input type="text" name="email" placeholder="Email">
<input type="text" name="salary" placeholder="Salary">
<button type="submit">Confirm</button>
</form>
</div>

<button onclick="showAddEmpModal()">Add Employee</button>

<script src="js/main.js"></script>

</body>
</html>