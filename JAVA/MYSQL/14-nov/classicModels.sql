show databases;

use classicmodels;

show tables;

select * from customers;

select  customernumber,customername,country from customers;
select  distinct country from customers;
select  distinct country,customername from customers;
select * from products;
select productname,buyprice from products where buyprice < 50;
select productname,buyprice from products where productname = 'hms bounty';
select productname,buyprice from products where buyprice >= 25 and buyprice <= 50;

