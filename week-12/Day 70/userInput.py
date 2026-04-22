option_price = 0
delivery_fee = 4
name = input('Enter your name:')
print('Hi '+name+', how are you doing today?')
specials = input('Here are the specials for today. Please select one of the following:\n 1. Medium Hamburger and Fries with Soda - $8 \n 2. Large Hamburger andm Fries with Soda - $11 \n 3. Large Pizza and Soda - $15 \n')
if (specials=='1'):
 option_price=8
 print("You've selected the Medium Hamburger and Fries with Soda")
elif (specials=='2'):
 option_price=11
 print("You've selected the Large Hamburger and Fries with Soda")
elif (specials=='3'):
 option_price=15
 print("You've selected the Large Pizza and Soda") 
 confirm_delivery = input('Would you like to have your meal delivered at an additional charge of $4? y/n')
if(confirm_delivery=='y'):
 print('Your order total is: $'+str(option_price+delivery_fee))
elif(confirm_delivery=='n'):
 print('Your order total is: $'+str(option_price))