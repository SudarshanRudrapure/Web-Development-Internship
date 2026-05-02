import numpy as np
pay_load3= np.array([
 [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
 [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
 [[19, 20, 21], [22, 23, 24], [25, 26, 27]]
])
print(pay_load3.ndim)
###############
a = np.arange(6)
print(a)
#reshape to 2D array
b = a.reshape(2, 3)
print(b)
###############
arr = np.arange(1, 15)
print(arr)
arr = np.arange(10, 50, 5)
print(arr)
###############
#numpy array with random values
a = np.random.rand(7)
print(a)
###############
#numpy array with random values 2D
a = np.random.rand(2,4)
print(a)
###############
a = np.array([2, 4, 6, 8])
b = np.sum(a)
print(b)
###############
arr = np.array([[4, 5], [3, 7]])
avg = np.average(arr)
print(avg)