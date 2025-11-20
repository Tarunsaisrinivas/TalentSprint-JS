use classicmodels;
show tables;
-- STRING FUNCTIONS DEMO

-- 1. Convert text to uppercase
SELECT UPPER('sql');

-- 2. Convert text to lowercase
SELECT LOWER('SQL');

-- 3. Length of string
SELECT LENGTH('hello world');
SELECT LENGTH('😁');

-- 4. Character length
SELECT CHAR_LENGTH('hello world');
SELECT CHAR_LENGTH('😁');

-- 5. Concatenate strings
SELECT CONCAT('Tarun', ' Sai');

-- 6. Concatenate with separator
SELECT CONCAT_WS('-', 'Tarun', 'Sai', 'Srinivas');

-- 7. Extract substring
SELECT SUBSTRING('Database', 1, 4);

-- 8. Left part of string
SELECT LEFT('Database', 4);

-- 9. Right part of string
SELECT RIGHT('Database', 4);

-- 10. Replace text
SELECT REPLACE('SQL Tutorial', 'SQL', 'DB');

-- 11. Insert substring at position
SELECT INSERT('abcdef', 3, 2, 'XY');

-- 12. Find position of substring
SELECT INSTR('Database', 'base');

-- 13. Locate substring
SELECT LOCATE('a', 'Database');

-- 14. Remove left spaces
SELECT LTRIM('   hi');

-- 15. Remove right spaces
SELECT RTRIM('hi   ');

-- 16. Remove surrounding spaces
SELECT TRIM('   hi   ');

-- 17. Reverse a string
SELECT REVERSE('Tarun');

-- 18. Repeat a string
SELECT REPEAT('A', 5);

-- 19. Add spaces
SELECT SPACE(5);

-- 20. Pad left side
SELECT LPAD('123', 5, '0');   -- Output: 00123

-- 21. Pad right side
SELECT RPAD('123', 5, '0');   -- Output: 12300

-- 22. Return index of value in list
SELECT FIELD('b', 'a','b','c');   -- Output: 2

-- 23. Find in comma-separated list
SELECT FIND_IN_SET('b', 'a,b,c'); -- Output: 2

-- 24. ASCII value of character
SELECT ASCII('A');   -- Output: 65

-- 25. Character from ASCII value
SELECT CHAR(65);     -- Output: 'A'
SELECT CAST(CHAR(65) AS CHAR);
-- 26. Binary comparison (case-sensitive)
SELECT 'a' = BINARY 'A';  -- Output: 0 (false)

