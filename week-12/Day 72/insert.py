#Insert data into employees table
import sqlite3
conn = sqlite3.connect('employee_database.db')
print ("Opened database successfully");
conn.execute("INSERT INTO employees (EMP_ID,NAME,DEPARTMENT_NAME,REGION,SALARY) \
 VALUES (3, 'Jack', 'Executive', 'UK', 50000.00 )");
conn.execute("INSERT INTO employees (EMP_ID,NAME,DEPARTMENT_NAME,REGION,SALARY) \
 VALUES (4, 'Alexis', 'HR', 'UK', 32000.00 )");
conn.execute("INSERT INTO employees (EMP_ID,NAME,DEPARTMENT_NAME,REGION,SALARY) \
 VALUES (5, 'Peter', 'Technology', 'US', 36000.00 )");
conn.execute("INSERT INTO employees (EMP_ID,NAME,DEPARTMENT_NAME,REGION,SALARY) \
 VALUES (6, 'Louis', 'Marketing', 'Norway', 25000.00 )");
conn.commit()
print ("Records inserted successfully");
conn.close()