use classicmodels;
-- 1. Write a query to add a new column salary of type DECIMAL(10,2) to the employees table. 
select * from employees;
desc employees;
ALTER TABLE employees ADD salary DECIMAL(10,2);
-- 2. Write a query to modify the size of the extension column to VARCHAR(10). 
ALTER TABLE employees MODIFY extension VARCHAR(10);
-- 3. Insert a new employee record into the table named John Carter working in officeCode 1. 
INSERT INTO employees 
(employeeNumber, lastName, firstName, extension, email, officeCode, jobTitle)
VALUES 
(2001, 'Carter', 'John', 'x1001', 'john.carter@classicmodelcars.com', 1, 'Sales Rep');

-- 4. Update the job title of employeeNumber 2001 to Senior Sales Rep. 
UPDATE employees
SET jobTitle = 'Senior Sales Rep'
WHERE employeeNumber = 2001;

-- 5. Delete the employee whose employeeNumber is 2001.
DELETE FROM employees WHERE employeeNumber = 2001;

-- 6.Display employeeNumber, firstName, lastName and jobTitle of all employees. 
SELECT employeeNumber, firstName, lastName, jobTitle FROM employees;

-- 7. Find all employees who report to employeeNumber 1056. 
SELECT * FROM employees WHERE reportsTo = 1056;

-- 8. Commit the recent changes to the employees table. 
COMMIT;

-- 9. Rollback the last modification done in the employees table. 
ROLLBACK;
-- 10. Grant SELECT and UPDATE privileges on employees table to user hrUser.
GRANT SELECT, UPDATE ON employees TO 'tarun'@'localhost';
