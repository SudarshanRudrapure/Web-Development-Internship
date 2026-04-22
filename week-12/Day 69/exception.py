number_list = [1, 2, 3, 4, 5, 6]
x = 'Hello World'
try:
 print(x)
except:
 print("Oops! An error has occured")
# NameError occurs when you try to use a variable, function, or module that doesn't exist or wasn't used in a valid way.
x='Hello World'
try:
 print(x)
except NameError:
 print("Variable x is not defined")
except:
 print("Something else went wrong")
# The Python ValueError is raised when the wrong value is assigned to an object.
# This can happen if the value is invalid for a given operation, or if the value doesnot exist
import math
try:
 x = math.sqrt(-100)
 print(x)
except NameError:
 print("Variable x is not defined")
except ValueError:
 print('Positive number expected for square root operation')
import math
try:
 x = math.sqrt(-100)
 print(x)
except NameError:
 print("Variable x is not defined")
except ValueError:
 print('Positive number expected for square root operation')
except TypeError:
 print("Variable x is not an integer")
# You can use the else keyword to define a block of code to be executed if no errors were raised:
try:
 print("Hello World")
except:
 print("Something went wrong")
else:
 print("Everything went smoothly")
# The finally block, if specified, will be executed regardless if the try block raises an error or not.
x="5"
y=5
try:
    print(x+y)
except TypeError:
 print('You cannot add a string and integer')
finally:
 print("The code has completed execution")
x = list(filter(lambda number:number%2==0,number_list))