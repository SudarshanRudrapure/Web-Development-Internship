# --- EXAMPLE 1: Appending and Overwriting ---
# 'a' means append (add to the end)
with open('file_1.txt', 'a') as file:
    file.write("\nThis is some new text which was appended")

# 'w' means write (this deletes what was there and starts fresh)
with open('file_1.txt', 'w') as file:
    file.write("This text overwrites all existing data in text file")

# --- EXAMPLE 2: Creating a new file ---
with open('file_2.txt', 'w') as file:
    file.write("This is a new file which was created using Python")
    # Note: No need for file.close() when using 'with'

# --- EXAMPLE 3: Writing a list to a file ---
fruit_list = ['Apple', 'Orange', 'Bananas', 'Grapes', 'Peach']
with open('fruits.txt', "w") as list_of_fruits:
    for fruit in fruit_list:
        list_of_fruits.write(fruit + "\n")

# Reading it back to show you it worked
with open('fruits.txt', 'r') as content:
    print("--- Content of fruits.txt ---")
    print(content.read())

# --- EXAMPLE 4: Counting words in a file ---
# We create a dummy file first so the function has something to read
with open("metcalfes_law.txt", "w") as f:
    f.write("Metcalfe's law states the value of a network is proportional to the square of the number of connected users.")

def count_words(file_path):
    try:
        with open(file_path, 'r') as file:
            data = file.read()
            # Clean commas and split by whitespace
            data = data.replace(",", " ")
            words = data.split() 
            return len(words)
    except FileNotFoundError:
        return "File not found!"

print(f"Word count: {count_words('metcalfes_law.txt')}")