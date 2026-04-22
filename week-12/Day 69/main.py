#Collections
#Lists [] changeable, ordered and allow for duplicates
carlist = ["Toyota", "Jaguar", "Tesla", 1, 25]
print(carlist)
carlist.append("Dodge")
print(carlist)
carlist.insert(2,"Porsche")
print(carlist)
carlist.remove(25)
print(carlist)
carlist[0]="Lexus"
print(carlist)
#Loop through carList and print each item in the list
for car in carlist:
 print(car)
# Dictionaries {} are used to store data values in key:value pairs.
# A dictionary is a collection which is ordered*, changeable and do not allow duplicates.
cardict = {
 "brand":"Jaguar",
 "model":"F-Type",
 "drivetrain":"rear-wheel"
}
print(cardict["model"])
print(cardict["drivetrain"])
model = cardict.get("model")
print(model)
keys = cardict.keys()
print(keys)
cardict["drivetrain"]="all-wheel"
print(cardict["drivetrain"])
cardict["year"]=2018
print(keys)
print(cardict["year"])