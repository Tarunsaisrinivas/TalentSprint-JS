
-- 1. Display all Cancelled orders
SELECT *
FROM orders
WHERE status = 'Cancelled';

-- 2. orderNumber, orderDate, shippedDate where shippedDate is NULL
SELECT orderNumber, orderDate, shippedDate
FROM orders
WHERE shippedDate IS NULL;

-- 3. Count orders shipped in 2003
SELECT COUNT(*) AS shipped_2003
FROM orders
WHERE YEAR(shippedDate) = 2003;

-- 4. Orders with comments NOT NULL
SELECT *
FROM orders
WHERE comments IS NOT NULL;

-- 5. Earliest and latest order dates
SELECT MIN(orderDate) AS earliest,
       MAX(orderDate) AS latest
FROM orders;

-- 6. Orders where requiredDate < shippedDate
SELECT *
FROM orders
WHERE requiredDate < shippedDate;

-- 7. Customer numbers with more than one order
SELECT customerNumber
FROM orders
GROUP BY customerNumber
HAVING COUNT(*) > 1;

-- 8. Total orders made by customer 141
SELECT COUNT(*) AS total_orders
FROM orders
WHERE customerNumber = 141;

-- 9. Orders between specific dates
SELECT *
FROM orders
WHERE orderDate BETWEEN '2003-05-01' AND '2003-06-01';

-- 10. Unique order status values
SELECT DISTINCT status
FROM orders;
