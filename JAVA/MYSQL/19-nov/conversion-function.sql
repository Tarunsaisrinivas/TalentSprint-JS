-- CAST(): Convert string to integer
SELECT CAST('123' AS SIGNED) AS cast_to_int;

-- CONVERT(): Convert string to DATE
SELECT CONVERT('2025-01-01', DATE) AS convert_to_date;

-- BINARY: Case-sensitive binary string
SELECT BINARY 'Hello' = 'hello' AS binary_compare;

-- CHAR(): ASCII → character
SELECT CHAR(65) AS char_of_65;   -- Output: 'A'

-- ASCII(): Character → ASCII code
SELECT ASCII('A') AS ascii_of_A;

-- FORMAT(): Format number with commas and decimals
SELECT FORMAT(12345.678, 2) AS formatted_number;

-- CONVERT_TZ(): Convert timezone (requires timezone tables)
SELECT CONVERT_TZ('2025-01-01 10:00', 'UTC', 'Asia/Kolkata') AS india_time;

-- DATE(): Extract date part
SELECT DATE('2025-03-15 12:30:00') AS only_date;

-- TIME(): Extract time part
SELECT TIME('2025-03-15 12:30:00') AS only_time;

-- DATETIME(): Convert date → datetime (adds 00:00:00)
SELECT DATETIME('2025-03-15') AS converted_datetime;

-- TIMESTAMP(): Combine date + time
SELECT TIMESTAMP('2025-03-15', '12:00:00') AS timestamp_value;

-- UNIX_TIMESTAMP(): Convert to Unix epoch seconds
SELECT UNIX_TIMESTAMP('2025-01-01 00:00:00') AS unix_seconds;

-- FROM_UNIXTIME(): Convert Unix seconds → datetime
SELECT FROM_UNIXTIME(1704067200) AS readable_datetime;

-- INET_ATON(): IPv4 → integer
SELECT INET_ATON('192.168.0.1') AS ip_to_number;

-- INET_NTOA(): integer → IPv4
SELECT INET_NTOA(3232235521) AS number_to_ip;
