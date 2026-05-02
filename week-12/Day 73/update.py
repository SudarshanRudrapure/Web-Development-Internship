import sqlite3

# 1. Establish Connection and Create Table
def initialize_db():
    try:
        conn = sqlite3.connect('employee_database.db')
        print("--- Database Initialized ---")
        
        # Drop table if exists to start fresh for this demo
        conn.execute("DROP TABLE IF EXISTS employees")
        
        conn.execute('''CREATE TABLE employees
             (EMP_ID INT PRIMARY KEY NOT NULL,
             NAME TEXT NOT NULL,
             DEPARTMENT_NAME TEXT NOT NULL,
             REGION TEXT,
             SALARY REAL);''')
        
        print("Table created successfully\n")
        conn.close()
    except Exception as e:
        print(f"Error initializing DB: {e}")

# 2. Insert Initial Data
def insert_data():
    conn = sqlite3.connect('employee_database.db')
    # Using a list of tuples is cleaner than multiple execute calls
    employees = [
        (3, 'Jack', 'Executive', 'UK', 50000.00),
        (4, 'Alexis', 'HR', 'UK', 32000.00),
        (5, 'Peter', 'Technology', 'US', 36000.00),
        (6, 'Louis', 'Marketing', 'Norway', 25000.00)
    ]
    
    try:
        conn.executemany("INSERT INTO employees VALUES (?, ?, ?, ?, ?)", employees)
        conn.commit()
        print(f"--- {conn.total_changes} Records inserted successfully ---\n")
    except sqlite3.IntegrityError:
        print("Records already exist.")
    finally:
        conn.close()

# 3. Retrieve and Display Data
def display_employees(message="Current Employee Data"):
    conn = sqlite3.connect('employee_database.db')
    print(f"--- {message} ---")
    cursor = conn.execute("SELECT EMP_ID, NAME, DEPARTMENT_NAME, REGION, SALARY FROM employees")
    
    for row in cursor:
        print(f"ID: {row[0]} | Name: {row[1]} | Dept: {row[2]} | Region: {row[3]} | Salary: {row[4]}")
    
    print("-" * 30 + "\n")
    conn.close()

# 4. Update Data
def update_employee_salary(emp_id, new_salary):
    conn = sqlite3.connect('employee_database.db')
    # Fixed the missing () from your original code: conn.commit()
    conn.execute("UPDATE employees SET SALARY = ? WHERE EMP_ID = ?", (new_salary, emp_id))
    conn.commit()
    print(f"--- Update Successful: EMP_ID {emp_id} now earns {new_salary} ---")
    print(f"Rows affected: {conn.total_changes}\n")
    conn.close()

# --- EXECUTION FLOW ---
if __name__ == "__main__":
    initialize_db()
    insert_data()
    display_employees("Data After Insertion")
    
    # Perform Update
    update_employee_salary(6, 31000.00)
    
    # Show final results
    display_employees("Data After Salary Update")