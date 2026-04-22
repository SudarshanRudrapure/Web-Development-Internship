import csv
file = open("myfile.txt", "r")
contents = file.read()
print(contents)
file.close()
with open('employee_data.csv','r') as csv_file:
 csv_reader = csv.DictReader(csv_file)
 line_count=0
 for row in csv_reader:
     if line_count ==0:
        line_count+=1
 print(f'{row["name"]} works in the {row["department"]} department. The employee\'s ID is {row["employee_id"]}.') 
 line_count+=1
