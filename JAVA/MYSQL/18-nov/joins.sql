use classicmodels;
desc orders;
show tables;
--  Get all orders with customer names
SELECT o.orderNumber, o.orderDate, c.customerName FROM orders o INNER JOIN customers c  ON o.customerNumber = c.customerNumber;

-- 2. Get order details with product names  
SELECT od.orderNumber, od.productCode, p.productName, od.quantityOrdered 
FROM orderdetails od 
INNER JOIN products p  
ON od.productCode = p.productCode; 

select * from products;

-- 3. List employees with their office city
SELECT e.employeeNumber, e.firstName, e.lastName, o.city 
FROM employees e 
INNER JOIN offices o  
ON e.officeCode = o.officeCode;

-- 4. LEFT JOIN Examples -1
-- 4. Customers and their orders (including customers with no orders) 
SELECT c.customerName, o.orderNumber, o.orderDate 
FROM customers c 
LEFT JOIN orders o 
ON c.customerNumber = o.customerNumber;
-- 5. Products and their order details (products never ordered also shown) 
SELECT p.productCode, p.productName, od.orderNumber 
FROM products p 
LEFT JOIN orderdetails od 
ON p.productCode = od.productCode;

-- RIGHT JOIN Examples 
-- 6. Employees and their managers (Shows managers even if no employees report to them) 
SELECT e.employeeNumber AS EmpID, 
e.firstName AS Employee, 
m.employeeNumber AS ManagerID, 
m.firstName AS Manager 
FROM employees e 
RIGHT JOIN employees m 
ON e.reportsTo = m.employeeNumber; 
-- FULL OUTER JOIN (MySQL workaround using UNION) 
-- 7. Customers and payments 
SELECT c.customerNumber, c.customerName, p.paymentDate 
FROM customers c 
LEFT JOIN payments p 
ON c.customerNumber = p.customerNumber 
UNION 
SELECT c.customerNumber, c.customerName, p.paymentDate 
FROM customers c 
RIGHT JOIN payments p 
ON c.customerNumber = p.customerNumber; 
-- SELF JOIN Examples 
-- 8. Employee and their manager 
SELECT e.firstName AS Employee, m.firstName AS Manager 
FROM employees e 
INNER JOIN employees m 
ON e.reportsTo = m.employeeNumber; 
-- CROSS JOIN Example 
-- 9. Combine each product with each product line 
SELECT p.productName, pl.productLine 
FROM products p 
CROSS JOIN productlines pl ;


-- SUB Queries
-- 1. Find customers who placed the highest number of orders 
SELECT customerName 
FROM customers 
WHERE customerNumber = ( 
SELECT customerNumber 
FROM orders 
GROUP BY customerNumber 
ORDER BY COUNT(*) DESC 
LIMIT 1 
);

-- 2. Product with the highest price 
SELECT productCode, productName, buyPrice 
FROM products 
WHERE buyPrice = ( 
SELECT MAX(buyPrice) 
FROM products 
); 

-- 3. Customers who placed orders in 2004 
SELECT customerName 
FROM customers 
WHERE customerNumber IN ( 
    SELECT customerNumber 
    FROM orders 
    WHERE YEAR(orderDate) = 2004 
); 

-- 4. Orders that include products belonging to “Motorcycles” 
SELECT orderNumber 
FROM orders 
WHERE orderNumber IN ( 
    SELECT orderNumber 
    FROM orderdetails 
    WHERE productCode IN ( 
        SELECT productCode 
        FROM products 
        WHERE productLine = 'Motorcycles' 
    ) 
);
show tables;