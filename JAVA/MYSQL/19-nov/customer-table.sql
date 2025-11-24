use classicmodels;
-- 1. Display customerName, city, and country
SELECT customerName, city, country
FROM customers;

-- 2. Customers who belong to 'USA'
SELECT *
FROM customers
WHERE country = 'USA';

-- 3. Customers with creditLimit > 100000
SELECT *
FROM customers
WHERE creditLimit > 100000;

-- 4. Customers without Sales Representative
SELECT *
FROM customers
WHERE salesRepEmployeeNumber IS NULL;

-- 5. Sort customers by creditLimit (descending)
SELECT *
FROM customers
ORDER BY creditLimit DESC;

-- 6. Customers living in cities starting with 'M'
SELECT *
FROM customers
WHERE city LIKE 'M%';

-- 7. Count customers in each country
SELECT country, COUNT(*) AS total_customers
FROM customers
GROUP BY country;

-- 8. Update creditLimit of customerNumber 103
UPDATE customers
SET creditLimit = 30000
WHERE customerNumber = 103;

-- 9. Delete customer with customerNumber 398
DELETE FROM customers
WHERE customerNumber = 398;

-- 10. Join customers with employees (show customer + employee name)
SELECT c.customerName, c.phone, c.country,
       e.firstName, e.lastName
FROM customers c
JOIN employees e
ON c.salesRepEmployeeNumber = e.employeeNumber;