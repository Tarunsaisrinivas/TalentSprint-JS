-- 1. Create table orderdetails
CREATE TABLE orderdetails (
    orderNumber INT,
    productCode VARCHAR(50),
    quantityOrdered INT,
    priceEach DECIMAL(10,2),
    orderLineNumber INT,
    PRIMARY KEY (orderNumber, productCode)
);

-- 2. Add a discount column (DECIMAL)
ALTER TABLE orderdetails
ADD discount DECIMAL(5,2);

-- 3. Delete the entire orderdetails table
DROP TABLE orderdetails;

-- 4. Insert record for order 10105
INSERT INTO orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber)
VALUES (10105, 'S123456', 20, 99.50, 2);

-- 5. Update price to 150 for product S181749 in order 10100
UPDATE orderdetails
SET priceEach = 150
WHERE orderNumber = 10100
  AND productCode = 'S181749';

-- 6. Delete order detail 10100 — S181749
DELETE FROM orderdetails
WHERE orderNumber = 10100
  AND productCode = 'S181749';

-- 7. Grant SELECT access to 'reportuser'
GRANT SELECT ON orderdetails TO 'reportuser';

-- 8. Remove SELECT privilege
REVOKE SELECT ON orderdetails FROM 'reportuser';

-- 9. Deduct 5 from price for all items in order 10101
UPDATE orderdetails
SET priceEach = priceEach - 5
WHERE orderNumber = 10101;

-- 10. Test price increase of 100 with rollback
START TRANSACTION;

UPDATE orderdetails
SET priceEach = priceEach + 100
WHERE orderNumber = 10101;

