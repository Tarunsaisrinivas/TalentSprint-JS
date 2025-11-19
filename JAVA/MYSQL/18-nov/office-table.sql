-- 1. Write a query to add a new column managerName to the offices table. 
use classicmodels;
select * from offices;
ALTER TABLE offices ADD managerName VARCHAR(100);
-- 2. Write a query to change the datatype of phone column to VARCHAR(30). 
ALTER TABLE offices MODIFY phone VARCHAR(30);
-- 3. Insert a new office record located in Dubai.
INSERT INTO offices (officeCode, city, phone, addressLine1, country, territory) VALUES ('8', 'Dubai', '+971-1234567', 'Dubai Main Street', 'UAE', 'EMEA');
-- 4. Update office city from 'NYC' to 'New York City'. 
UPDATE offices SET city = 'New York City' WHERE officeCode = '1' AND city = 'NYC';
-- UPDATE offices SET city = 'New York City' WHERE city = 'NYC';
-- 5. Delete the record where officeCode = '8'. 
DELETE FROM offices WHERE officeCode = '8';
-- 6. Retrieve city, country and territory from offices table.
SELECT city, country, territory FROM offices;

-- 7. Display all offices located in the EMEA territory. 
SELECT * FROM offices WHERE territory = 'EMEA';

-- 8. Commit the last transaction.
COMMIT; 
-- 9. Rollback the last executed transaction. 
ROLLBACK;
-- 10. Grant SELECT permission on offices table to user demoUser.
GRANT SELECT ON offices TO 'tarun'@'localhost';
