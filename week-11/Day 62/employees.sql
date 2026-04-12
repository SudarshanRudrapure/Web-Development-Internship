/*Alter the employees table and add the email column*/

ALTER TABLE `employees`
ADD `email` varchar(100) NOT NULL;

/*Insert data into departments table*/
/*NOTE: This set of data must be inserted before inserting the employees data*/

insert into departments(departmentCode,city,departmentName) values
 ('1','London','Technology'),
 ('2','Oxford', 'Transport'),
 ('3','Oxford','Marketing'),
 ('4','London','Executive'),
 ('5','Oxford','Sales');

/*Insert data into employees table*/

insert into employees(employeeNumber,lastName,firstName,email,departmentCode,jobTitle,salary) values
 (1002,'Adams','Joe','jadams@jcoaches.com','4','CEO',80000),
 (1056,'Peterson','Pamela','ppeterson@jcoaches.com','3','Head of Marketing',45000),
 (1076,'Jacobs','Ashton','ajacobs@jcoaches.com','1','Software Developer',46000),
 (1088,'Jessica','Bloom','jbloom@jcoaches.com','2','Head of Transport',55000); 