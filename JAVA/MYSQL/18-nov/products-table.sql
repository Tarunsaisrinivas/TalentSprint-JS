use classicmodels;
-- 1. Write a query to add a new column discount of type DECIMAL(5,2) to the products table. 
ALTER TABLE products ADD discount DECIMAL(5,2);
-- 2. Write a query to change the size of the column productVendor to VARCHAR(80).
ALTER TABLE products MODIFY productVendor VARCHAR(80);
-- 3. Insert a new record into the products table with only productCode and productName. 
SELECT * FROM products;
desc products;

INSERT INTO products (productCode, productName, productLine) VALUES ('ID_101', 'Tarun', 'Classic Cars');

ALTER TABLE products MODIFY productLine VARCHAR(50) NULL;

INSERT INTO products (
  productCode,
  productName,
  productScale,
  productVendor,
  productDescription,
  quantityInStock,
  buyPrice,
  MSRP
)
VALUES (
  'S10_9999',
  'Sample car',
  '1:18',
  'Auto',
  'sample description',
  200,
  75.00,
  120.00
);
-- 4.Update the buyPrice of productCode S10_9999 to 85.00.
UPDATE products SET buyPrice = 85.00 WHERE productCode = 'S10_9999';

-- 5.Delete the product with productCode S10_9999. 

DELETE FROM products WHERE productCode = 'S10_9999';

-- 6. Display productName, productVendor and buyPrice for all products.
SELECT productName, productVendor, buyPrice FROM products;

-- 7. Select all products where quantityInStock is greater than 500. 
SELECT * FROM products WHERE quantityInStock > 500;
-- 8. Commit the previous transactions. 
COMMIT;
-- 9. Rollback the last changes performed on the table.
ROLLBACK; 
-- 10. Grant INSERT and UPDATE privileges on products to user storeUser.
GRANT INSERT, UPDATE ON products TO 'tarun'@'localhost';


