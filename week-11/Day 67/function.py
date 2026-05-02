# Greeting function
def greeting(name):
 print("Hello " + name + " how are you doing?")
greeting("Alexis")
# calculating the area of a rectangle function
def calculate_area_rect(length, width):
 area = length * width
 print(area)
calculate_area_rect(2, 5)
# withdraw money function
def withdraw_money(amount):
 balance = 1000
 current_balance = balance - amount
 return current_balance
print("After your withdrawal, you have $" + str(withdraw_money(600)) + " remaining")