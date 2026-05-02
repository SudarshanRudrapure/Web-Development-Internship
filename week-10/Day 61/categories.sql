/*Insert rows into categories table*/
insert into categories (categoryCode,categoryName,categoryDescription) values
(100, 'Sofas','Select from a range of sofas'),
(101,'Beds','Select from a range of beds'),
(102,'Kitchen Tables','Select from a range of kitchen tables');

/*Insert rows into products table.*/
insert into products (productCode,productName,productDescription,productPrice,categoryCode) values
(1,'Corner Sofa','A modern day corner sofa suitable for a small family.',1150,100),
(2,'3 Seat Sofa','Ideal for those who love crashing in front of the television.',700,100),
(3,'Queen Size Bed','A queen sized luxury comfort bed.',1300,101),
(4,'5 Piece Kitchen Table','A 5 piece kitchen table set with 1 table and 4 chairs.',400, 102),
(5,'9 Piece Kitchen Table','A 9 piece kitchen table set with 1 table and 8 chairs.',750, 102);

/*Update the categories table and change cate to Dining Tables where the categoryCode is equal to 102*/
update categories
set categoryName = "Dining Tables"
where categoryCode = 102; 
