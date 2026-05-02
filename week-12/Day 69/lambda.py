def greeting(x):
 return x
print(greeting('Hello World'))
#-------------------------------------------
x = lambda a:a
print(x('Hello World 2'))
#-------------------------------------------
def multiplication(x,y):
 return x*y
print(multiplication(2,5))
#-------------------------------------------
z = lambda x,y:x*y
print(z(2,5))
#-------------------------------------------
def multiplication_lambda(n):
 return lambda a: a * n
x=multiplication_lambda(2)
print(x(5))
#-------------------------------------------
number_list = [1,2,3,4,5,6,7,8,9,10,11,12]
x = list(filter(lambda number:number%2==0,number_list))