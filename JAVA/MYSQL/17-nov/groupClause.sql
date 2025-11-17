use classicmodels;
show tables;

desc payments;
desc orders;
desc customers;
select customername,state,country from customers;
select count(country) from customers;
select buyprice from products;
select sum(buyprice), avg(buyprice),count(buyprice),max(buyprice),min(buyprice) from products;
select sum(buyprice), avg(buyprice),count(buyprice),max(buyprice),min(buyprice) from products where productcode > 7768 ;
select productVendor, sum(buyprice), avg(buyprice),count(buyprice),max(buyprice),min(buyprice) from products group by(productVendor);
select productVendor, sum(buyprice), avg(buyprice),count(buyprice),max(buyprice),min(buyprice) from products group by(productVendor) having (sum(buyprice) > "Red Start Diecast");
select productVendor, sum(buyprice), avg(buyprice),count(buyprice),max(buyprice),min(buyprice) from products group by(productVendor) having (sum(buyprice) > "Red Start Diecast") order by sum(buyprice);

select buyprice from products order by buyprice;
select buyprice from products order by buyprice desc;
select buyprice,productname from products order by productname desc;
select buyprice,productname from products order by productname, buyprice desc;

CREATE TABLE Bank (
    accountId INT PRIMARY KEY,
    acName VARCHAR(50) NOT NULL,
    branch VARCHAR(50) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    dob DATE NOT NULL,

--     age INT AS (YEAR('2025-01-01') - YEAR(dob)) STORED,
--     CHECK (age >= 18),
		CHECK (dob <= DATE_SUB(CURRENT_DATE(), INTERVAL 18 YEAR)),


    balance DECIMAL(10,2) DEFAULT 5000,
    CHECK (balance >= 5000)
);

CREATE TABLE Transactions (
    tId INT PRIMARY KEY,
    accountId INT,
    type_trans VARCHAR(10) CHECK (type_trans IN ('saving', 'current')),
    amount DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (accountId) REFERENCES Bank(accountId)
);


INSERT INTO Bank (accountId, acName, branch, phone, dob, balance)
VALUES
(1, 'Pavan', 'Mumbai', '9876543210', '1995-04-12', 6000),

(2, 'Amarnadh', 'Delhi', '9876543211', '1990-08-25', 10000),

(3, 'Tarun Sai', 'Hyderabad', '9876543212', '1998-12-10', 5500),

(4, 'Ganesh Alla', 'Chennai', '9876543213', '1985-06-05', 7500),

(5, 'SriRam Karthik', 'Bangalore', '9876543214', '1992-03-18', 9000);

-- Less than 18
INSERT INTO BANK(accountId, acName,branch,phone,dob,balance) values(6,'Arjun','Maharastra',9876543222,'2007-04-14',8000);
INSERT INTO BANK(accountId, acName,branch,phone,dob,balance) values(7,'Ram','Karnataka',98765432215,'2006-08-25',8000);

select * from bank;
DELETE FROM Bank WHERE accountId = 7;
