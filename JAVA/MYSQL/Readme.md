1. To see current user
```sql
select current_user();
```
2. To see databases
```sql
show databases;
```
3. To select databases
```sql
use database_name;
```
4. To see the tables
```sql
show tables;
```
5. To create databases
```sql
create database database_name;
```
6. To get all the user
```sql
select user,host from mysql.user;
```
7. To create user
```sql
create user 'tarun@localhost' identified by 'tarun';
```
8. To give permissions to user to execute command
```sql
grant all on tarun to 'tarun@localhost';
```
9. To switch from one user to another in cmd
```sql
mysql -u 'tarun@localhost' -p 
```

>Date : 14-11-25
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/sql-commands.jpg" style="width:100%;height:100%" >

- Alter vs Update:
- ALTER changes the structure of a table, while UPDATE changes the data inside the table.

- Truncate vs Delete:
- TRUNCATE removes all rows instantly without logging each row (cannot be rolled back easily), while DELETE removes rows one-by-one with logging and can be rolled back.

**Data Types in SQL**

| Data Type        | Category    | Description | Sample Code |
|------------------|-------------|-------------|-------------|
| INT              | Numeric     | Whole numbers. | `age INT` |
| TINYINT          | Numeric     | Very small integers (1 byte). | `is_active TINYINT` |
| SMALLINT         | Numeric     | Small integers. | `count SMALLINT` |
| MEDIUMINT        | Numeric     | Medium integers. | `views MEDIUMINT` |
| BIGINT           | Numeric     | Large integers. | `order_id BIGINT` |
| FLOAT            | Numeric     | Single-precision decimal. | `price FLOAT` |
| DOUBLE           | Numeric     | Double-precision decimal. | `rating DOUBLE` |
| DECIMAL(M,D)     | Numeric     | Exact decimal values (money). | `salary DECIMAL(10,2)` |
| CHAR(n)          | String      | Fixed-length string. | `code CHAR(5)` |
| VARCHAR(n)       | String      | Variable-length string. | `name VARCHAR(100)` |
| TEXT             | String      | Large text (64KB). | `description TEXT` |
| MEDIUMTEXT       | String      | Very large text (16MB). | `content MEDIUMTEXT` |
| LONGTEXT         | String      | Extremely large text (4GB). | `notes LONGTEXT` |
| DATE             | Date/Time   | Only date. | `dob DATE` |
| TIME             | Date/Time   | Only time. | `login_time TIME` |
| DATETIME         | Date/Time   | Date + time. | `created_at DATETIME` |
| TIMESTAMP        | Date/Time   | Auto-updated timestamp. | `updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP` |
| YEAR             | Date/Time   | Year value. | `release_year YEAR` |
| BOOLEAN          | Boolean     | TRUE/FALSE (stored as TINYINT). | `is_admin BOOLEAN` |
| ENUM             | Misc        | One value from list. | `gender ENUM('male','female','other')` |
| SET              | Misc        | Multiple values from list. | `skills SET('JS','PHP','SQL')` |
| BLOB             | Binary      | Binary data. | `image BLOB` |
| MEDIUMBLOB       | Binary      | Larger binary data. | `file MEDIUMBLOB` |
| LONGBLOB         | Binary      | Extremely large binary. | `video LONGBLOB` |


- Commands for the class practice :

create database tsbatch70;

show databases;

use tsbatch70;

show tables;

CREATE TABLE EMP(eid int(5), ename varchar(30), job varchar(30), salary double(10,2), DOJ date);

desc Emp; <!-- This helps to represent the description of the table Emp -->

INSERT INTO EMP VALUES( 101, "Tarun","Full Stack Developer", 400000.00,"2025-07-15");

INSERT INTO EMP(ENAME,SALARY) VALUES("SAI",500000.00);  <!-- We can assign the particular values in the table -->

INSERT INTO EMP VALUES( 102, "Ganesh","Typescript Developer", 600000.00,"2024-07-15");
INSERT INTO EMP VALUES( 103, "Alla","React Native Developer", 300000.00,"2024-05-15");

ALTER TABLE EMP ADD COLUMN(phone int,email varchar(30));


- Alter Syntax:
  - Alter table emp[add/modify/drop/rename] column column_details.

- UPDATE SYNTAX :
    - update table_name set column column_name = value;

- Select :
    - select [distinct clause]* [col 3, col 5,..] from table 1, table2 .. [where clause] [group b clause][having clause] [order by clause [asc/desc]] [limit10];

    - select  customernumber,customername,country from customers;
    - select  distinct country from customers;
    - select  distinct country,customername from customers;

### WHERE Clause:
## SQL WHERE Clause Operators (Categorized)

| Category           | Operator / Keyword | Meaning / Usage                                | Example |
|--------------------|--------------------|------------------------------------------------|---------|
| **Arithmetic**     | +, -, *, /, %      | Used inside WHERE for calculations             | `WHERE salary + 5000 > 60000` |
|                    |                    |                                                |         |
| **Comparison**     | =                  | Equal to                                       | `WHERE eid = 101` |
|                    | <> or !=           | Not equal to                                   | `WHERE job <> 'Manager'` |
|                    | >                  | Greater than                                   | `WHERE salary > 50000` |
|                    | <                  | Less than                                      | `WHERE salary < 30000` |
|                    | >=                 | Greater than or equal to                       | `WHERE salary >= 40000` |
|                    | <=                 | Less than or equal to                          | `WHERE salary <= 35000` |
|                    | BETWEEN            | Between a range                                | `WHERE salary BETWEEN 30000 AND 60000` |
|                    | IN                 | Matches any value from a list                  | `WHERE job IN ('HR','Developer')` |
|                    | NOT IN             | Excludes values in a list                      | `WHERE eid NOT IN (101,103)` |
|                    |                    |                                                |         |
| **Logical**        | AND                | Both conditions must be true                   | `WHERE job='Developer' AND salary>50000` |
|                    | OR                 | One condition must be true                     | `WHERE job='Developer' OR job='Tester'` |
|                    | NOT                | Negates a condition                            | `WHERE NOT salary < 30000` |
|                    | XOR                | Only one of two conditions true                | `WHERE (salary>50000) XOR (job='Manager')` |
|                    |                    |                                                |         |
| **Pattern Matching** | LIKE             | Pattern matching using wildcards               | `WHERE ename LIKE 'T%'` |
|                    | NOT LIKE           | Pattern not matching                           | `WHERE job NOT LIKE '%Dev%'` |
|                    |                    |                                                |         |
| **NULL Checking**  | IS NULL            | Checks if value is NULL                        | `WHERE mobile IS NULL` |
|                    | IS NOT NULL        | Checks if value is NOT NULL                    | `WHERE DOJ IS NOT NULL` |



- Alias :



    - select productname pname,buyprice "cost", buyprice*10/100 * discount10% rom products where productname = 'hms bounty';





- [ ] Display customers name whose names starts with 'S';
- [ ] Display customers name whose names ends with 'S';
- [ ] Display customers name whose names has with 'S';
- [ ] Display customers name whose names who has r char in their name;

## 1. SQL Alias
What is an Alias?

An alias is a temporary name given to a column or table to make the output easier to understand.

Syntax
SELECT column_name AS alias_name FROM table_name;
-- OR
SELECT column_name alias_name FROM table_name;

Examples
SELECT productname AS pname, buyprice AS cost FROM products;

SELECT buyprice * 0.10 AS discount_10_percent FROM products;

Corrected Example (Your Query)
SELECT 
    productname AS pname,
    buyprice AS cost,
    buyprice * 0.10 AS discount_10_percent
FROM products
WHERE productname = 'hms bounty';

## 2. SQL AND Operator
What is AND?

Used to apply multiple conditions together in the WHERE clause.

Syntax
SELECT column
FROM table
WHERE condition1 AND condition2;

Example
SELECT customerName
FROM customers
WHERE country = 'USA' AND creditLimit > 50000;

## 3. SQL LIKE Operator
What is LIKE?

LIKE is used for pattern matching in text values.

Wildcards
Symbol	Meaning
%	Any number of characters
_	Exactly one character
Syntax
SELECT column_name
FROM table
WHERE column_name LIKE 'pattern';

🎯 Practice Questions — Solutions

Assume table: customers
Column: customerName

### 1️⃣ Customers whose name starts with 'S'
SELECT customerName 
FROM customers
WHERE customerName LIKE 'S%';

### 2️⃣ Customers whose name ends with 'S'
SELECT customerName 
FROM customers
WHERE customerName LIKE '%S';

### 3️⃣ Customers whose name contains 'S' anywhere
SELECT customerName 
FROM customers
WHERE customerName LIKE '%S%';

### 4️⃣ Customers whose name contains the character 'r'
SELECT customerName 
FROM customers
WHERE customerName LIKE '%r%';

