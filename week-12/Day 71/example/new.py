# Append text to a new line
with open('file_1.txt', 'a') as file:
 file.write("\nThis is some new text which was appended")
#Write data and overwrite existing data
with open('file_1.txt', 'w') as file:
 file.write("This text overwrites all existing data in text file")
# Create a new file
with open('file_2.txt', 'w') as file:
 file.write("This is a new file which was created using Python")
 file.close()
#Print a list of fruits
fruit_list = ['Apple ', 'Orange ', 'Bananas ', 'Grapes', 'Peach']
with open('fruits.txt', "w") as list_of_fruits:
 for fruit in fruit_list:
        list_of_fruits.write("\n"+ fruit)
content = open('fruits.txt')
print(content.read())
#print amount of words in a text file
def count_words(file_path):
 with open(file_path) as file:
    data = file.read()
    data = data.replace(",", " ")
    return len(data.split(" "))
print(count_words("metcalfes_law.txt"))
print(f'Employee\'s ID is {row["employee_id"]}.')
line_count+=1