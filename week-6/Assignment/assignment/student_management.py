# Student Data Management System

# Initial list of dictionaries to store student records
students = [
    {"Name": "Sudarshan", "Age": 22, "Course": "Data Science"},
    {"Name": "Preeti", "Age": 21, "Course": "Web Development"}
]

def add_student(name, age, course):
    """Adds a new student dictionary to the list."""
    new_student = {
        "Name": name,
        "Age": age,
        "Course": course
    }
    students.append(new_student)
    print(f"Successfully added: {name}")

def modify_course(student_name, new_course):
    """Finds a student by name and updates their course."""
    found = False
    for student in students:
        if student["Name"].lower() == student_name.lower():
            student["Course"] = new_course
            found = True
            print(f"Updated {student_name}'s course to {new_course}.")
            break
    
    if not found:
        print(f"Student '{student_name}' not found.")

def display_students():
    """Iterates through the list and prints all records."""
    print("\n--- Current Student Records ---")
    for i, student in enumerate(students, 1):
        print(f"{i}. Name: {student['Name']} | Age: {student['Age']} | Course: {student['Course']}")
    print("-------------------------------\n")

# --- Execution ---

# 1. Display initial records
display_students()

# 2. Add a new student
add_student("Sneha", 21, "Cyber Security")

# 3. Modify a student's course
modify_course("Preeti", "Artificial Intelligence")

# 4. Display final records
display_students()