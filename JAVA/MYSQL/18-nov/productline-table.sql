use classicmodels;

select * from productlines;

-- 1. Write a query to add a new column createdBy to the productlines table. \
ALTER TABLE productlines ADD createdBy VARCHAR(100);

--  2. Write a query to change the datatype of textDescription to VARCHAR(2000).
desc productlines;
ALTER TABLE productlines MODIFY textDescription VARCHAR(2000);
-- 3. Insert a new product line called Sports Cars with only productLine value. 
INSERT INTO productlines (productLine) VALUES ('Sports Cars');

-- 4. Update the description of the Planes category to include "Best-selling models available".
UPDATE productlines SET textDescription = CONCAT(textDescription, ' Best-selling models available') WHERE productLine = 'Planes';

-- 5. Delete the record where productLine = 'Sports Cars'.
DELETE FROM productlines WHERE productLine = 'Sports Cars';
-- 6. Display all product lines and their text descriptions.
SELECT productLine, textDescription FROM productlines;

-- 7. Retrieve all product lines that contain the word models in textDescription.
SELECT * FROM productlines WHERE textDescription LIKE '%models%';

-- 8. Commit the recent transaction. 
COMMIT;
-- 9. Rollback the previous operation.
ROLLBACK; 
-- 10. Grant SELECT and UPDATE permissions to user demoUser on productlines table. 
GRANT SELECT, UPDATE ON productlines TO 'tarun'@'localhost';




