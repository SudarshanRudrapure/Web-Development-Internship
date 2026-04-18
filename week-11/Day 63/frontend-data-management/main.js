var employeeListHolder = document.querySelector(".employee-list");
var addEmployeeModal = document.querySelector("#employeeModal");

addEmployeeModal.style.display = "none";

function showAddEmpModal(){
    addEmployeeModal.style.display = "block";
}

function addEmployee(){
    var name = document.querySelector("#name").value;

    var newItem = `
    <li>
    <div class="employee-card">
    <span>${name}</span>
    </div>
    </li>`;

    employeeListHolder.insertAdjacentHTML('beforeend', newItem);
    addEmployeeModal.style.display = "none";
}