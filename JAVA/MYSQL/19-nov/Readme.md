### Functions :

- Built in functions:
  - Aggregate function : sum(),avg(),min(),max(),count()
  - Numerical functions :
  - Char functions :
  - Date functions :
  - Conversion functions :
  1. String function
     | Function | Description | Example |
     | --------------- | ----------------------------------------------- | ---------------------------------------------------- |
     | `UPPER()` | Converts text to uppercase | `SELECT UPPER('sql');` |
     | `LOWER()` | Converts text to lowercase | `SELECT LOWER('SQL');` |
     | `LENGTH()` | Returns length of string | `SELECT LENGTH('hello');` |
     | `CHAR_LENGTH()` | Length in characters (same as LENGTH for MySQL) | `SELECT CHAR_LENGTH('hello');` |
     | `CONCAT()` | Joins strings | `SELECT CONCAT('Tarun', ' Sai');` |
     | `CONCAT_WS()` | Joins strings **with a separator** | `SELECT CONCAT_WS('-', 'Tarun', 'Sai', 'Srinivas');` |
     | `SUBSTRING()` | Extracts substring | `SELECT SUBSTRING('Database', 1, 4);` |
     | `LEFT()` | Returns left part of string | `SELECT LEFT('Database', 4);` |
     | `RIGHT()` | Returns right part of string | `SELECT RIGHT('Database', 4);` |
     | `REPLACE()` | Replaces text | `SELECT REPLACE('SQL Tutorial', 'SQL', 'DB');` |
     | `INSERT()` | Inserts substring at position | `SELECT INSERT('abcdef', 3, 2, 'XY');` |
     | `INSTR()` | Returns position of substring | `SELECT INSTR('Database', 'base');` |
     | `LOCATE()` | Returns position (same as INSTR but flexible) | `SELECT LOCATE('a', 'Database');` |
     | `LTRIM()` | Removes left spaces | `SELECT LTRIM('   hi');` |
     | `RTRIM()` | Removes right spaces | `SELECT RTRIM('hi   ');` |
     | `TRIM()` | Removes surrounding spaces | `SELECT TRIM('   hi   ');` |
     | `REVERSE()` | Reverses text | `SELECT REVERSE('Tarun');` |
     | `REPEAT()` | Repeats a string | `SELECT REPEAT('A', 5);` |
     | `SPACE()` | Returns spaces | `SELECT SPACE(5);` |
     | `LPAD()` | Pads left side | `SELECT LPAD('123', 5, '0');` |
     | `RPAD()` | Pads right side | `SELECT RPAD('123', 5, '0');` |
     | `FIELD()` | Returns index of string in list | `SELECT FIELD('b', 'a','b','c');` |
     | `FIND_IN_SET()` | Finds position in comma-separated list | `SELECT FIND_IN_SET('b', 'a,b,c');` |
     | `ASCII()` | Returns ASCII value of first character | `SELECT ASCII('A');` |
     | `CHAR()` | Returns character from ASCII code | `SELECT CHAR(65);` |
     | `BINARY` | Binary comparison (case-sensitive) | `SELECT 'a' = BINARY 'A';` |

2. Numeric function :

| Function               | Description    | Example                    |
| ---------------------- | -------------- | -------------------------- |
| `ABS()`                | Absolute value | `SELECT ABS(-10);`         |
| `ROUND()`              | Round number   | `SELECT ROUND(23.567, 2);` |
| `CEIL()` / `CEILING()` | Round up       | `SELECT CEIL(4.3);`        |
| `FLOOR()`              | Round down     | `SELECT FLOOR(4.9);`       |
| `POWER()`              | Exponent       | `SELECT POWER(2, 3);`      |
| `MOD()`                | Remainder      | `SELECT MOD(10, 3);`       |
| `SQRT()`               | Square root    | `SELECT SQRT(25);`         |

3. Date and Time function
   | Function | Description | Example |
   | ------------ | ------------------- | ---------------------------------------------- |
   | `NOW()` | Current date & time | `SELECT NOW();` |
   | `CURDATE()` | Current date | `SELECT CURDATE();` |
   | `CURTIME()` | Current time | `SELECT CURTIME();` |
   | `DATEDIFF()` | Days between dates | `SELECT DATEDIFF('2025-01-10', '2025-01-01');` |
   | `DATE_ADD()` | Add interval | `SELECT DATE_ADD(NOW(), INTERVAL 5 DAY);` |
   | `DATE_SUB()` | Subtract interval | `SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH);` |
   | `DAY()` | Returns day | `SELECT DAY(NOW());` |
   | `MONTH()` | Returns month | `SELECT MONTH(NOW());` |
   | `YEAR()` | Returns year | `SELECT YEAR(NOW());` |

4. Control flow function
   | Function | Description | Example |
   | ------------ | --------------------- | ------------------------------------ |
   | `IF()` | Conditional logic | `SELECT IF(2 > 1, 'YES', 'NO');` |
   | `CASE` | Multiple conditions | `CASE WHEN marks >= 90 THEN 'A' END` |
   | `NULLIF()` | Returns NULL if equal | `SELECT NULLIF(10, 10);` |
   | `COALESCE()` | First non-null value | `SELECT COALESCE(NULL, 'Tarun');` |

5. Conversion function
   | Function | Description | Example |
   | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------- |
   | `CAST()` | Converts a value to a specified data type | `SELECT CAST('123' AS SIGNED);` |
   | `CONVERT()` | Converts a value to a specified data type (similar to CAST) | `SELECT CONVERT('2025-01-01', DATE);` |
   | `BINARY` | Converts a value to binary string (case-sensitive compare) | `SELECT BINARY 'Hello';` |
   | `CHAR()` | Converts ASCII code → character | `SELECT CHAR(65);` → `'A'` |
   | `ASCII()` | Converts character → ASCII code | `SELECT ASCII('A');` |
   | `FORMAT()` | Converts number → formatted string | `SELECT FORMAT(12345.678, 2);` |
   | `CONVERT_TZ()` | Converts date/time between time zones | `SELECT CONVERT_TZ('2025-01-01 10:00','UTC','Asia/Kolkata');` |
   | `DATE()` | Converts string/datetime → date | `SELECT DATE('2025-03-15 12:30:00');` |
   | `TIME()` | Converts string/datetime → time | `SELECT TIME('2025-03-15 12:30:00');` |
   | `DATETIME()` | Converts date/time → datetime | `SELECT DATETIME('2025-03-15');` |
   | `TIMESTAMP()` | Converts date/time → timestamp format | `SELECT TIMESTAMP('2025-03-15','12:00:00');` |
   | `UNIX_TIMESTAMP()` | Converts date/time → Unix seconds | `SELECT UNIX_TIMESTAMP('2025-01-01');` |
   | `FROM_UNIXTIME()` | Converts Unix seconds → datetime | `SELECT FROM_UNIXTIME(1704067200);` |
   | `INET_ATON()` | Converts IPv4 → number | `SELECT INET_ATON('192.168.0.1');` |
   | `INET_NTOA()` | Converts number → IPv4 | `SELECT INET_NTOA(3232235521);` |

6. Data Conversion functions :

| Function           | Description                                                      | Example                                                       |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| `STR_TO_DATE()`    | Converts a **string** into a **date/datetime** using a format    | `SELECT STR_TO_DATE('25-02-2025','%d-%m-%Y');`                |
| `DATE_FORMAT()`    | Converts a **date/datetime** to a **formatted string**           | `SELECT DATE_FORMAT(NOW(), '%d-%m-%Y');`                      |
| `CAST()`           | Converts string/datetime to a specific type (`DATE`, `DATETIME`) | `SELECT CAST('2025-02-25' AS DATE);`                          |
| `CONVERT()`        | Similar to CAST, converts data type                              | `SELECT CONVERT('2025-02-25', DATE);`                         |
| `DATE()`           | Converts DATETIME → DATE                                         | `SELECT DATE('2025-02-25 15:30:00');`                         |
| `TIME()`           | Converts DATETIME → TIME                                         | `SELECT TIME('2025-02-25 15:30:00');`                         |
| `DATETIME()`       | Converts value to DATETIME                                       | `SELECT DATETIME('2025-02-25');`                              |
| `TIMESTAMP()`      | Converts string/date → timestamp format                          | `SELECT TIMESTAMP('2025-02-25', '12:00:00');`                 |
| `UNIX_TIMESTAMP()` | Converts datetime → Unix time (seconds)                          | `SELECT UNIX_TIMESTAMP('2025-02-25 12:00:00');`               |
| `FROM_UNIXTIME()`  | Converts Unix time (seconds) → datetime                          | `SELECT FROM_UNIXTIME(1730000000);`                           |
| `CONVERT_TZ()`     | Converts datetime between timezones                              | `SELECT CONVERT_TZ('2025-02-25 10:00','UTC','Asia/Kolkata');` |

----------------------------------

