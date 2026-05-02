import sqlite3

#CREATE DATABASE AND CONNECT
conn = sqlite3.connect('employee_database.db')
print ("Database has been opened");

#CREATE EMPLOYEES TABLE
conn.execute('''CREATE TABLE employees
 (EMP_ID INT PRIMARY KEY NOT NULL,
 NAME TEXT NOT NULL,
 DEPARTMENT_NAME CHAR(40)NOT NULL,
 REGION CHAR(50),
 SALARY REAL);''')

print ("Table created successfully");

#CLOSE DATABASE AFTER CREATE OPERATION HAS BEEN EXECUTED
conn.close()