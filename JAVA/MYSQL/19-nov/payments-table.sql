-- 1. Payments made by customer 141
SELECT *
FROM payments
WHERE customerNumber = 141;

-- 2. Highest payment amount
SELECT MAX(amount) AS highest_payment
FROM payments;

-- 3. Total number of payments
SELECT COUNT(*) AS total_payments
FROM payments;

-- 4. Payments greater than 50,000
SELECT *
FROM payments
WHERE amount > 50000;

-- 5. Number of payments per customer
SELECT customerNumber, COUNT(*) AS total_payments
FROM payments
GROUP BY customerNumber;

-- 6. Customers who made more than 5 payments
SELECT customerNumber
FROM payments
GROUP BY customerNumber
HAVING COUNT(*) > 5;

-- 7. Payments made in 2004
SELECT *
FROM payments
WHERE YEAR(paymentDate) = 2004;

-- 8. Smallest payment
SELECT MIN(amount) AS smallest_payment
FROM payments;

-- 9. Total payment amount per customer
SELECT customerNumber, SUM(amount) AS total_amount
FROM payments
GROUP BY customerNumber;

-- 10. checkNumber, amount sorted by amount DESC
SELECT checkNumber, amount
FROM payments
ORDER BY amount DESC;