import numpy as np

# Creating a 2D dataset (rows = students, columns = subjects)
marks_list = [
    [85, 78, 92],
    [88, 76, 95],
    [90, 82, 89]
]

# Convert to NumPy array
marks_array = np.array(marks_list)

print("Student Marks (2D Array):")
print(marks_array)

# Calculations
average_marks = np.mean(marks_array)
max_marks = np.max(marks_array)
min_marks = np.min(marks_array)

print("\nAverage Marks:", average_marks)
print("Maximum Marks:", max_marks)
print("Minimum Marks:", min_marks)