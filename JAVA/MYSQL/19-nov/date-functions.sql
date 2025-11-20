-- 1. NOW() → Current date & time
SELECT NOW() AS current_datetime;

-- 2. CURDATE() → Current date
SELECT CURDATE() AS `current_date`;

-- 3. CURTIME() → Current time
SELECT CURTIME() AS `current_time`;

-- 4. DATEDIFF() → Difference in days between two dates
SELECT DATEDIFF('2025-01-10', '2025-01-01') AS days_difference;

-- 5. DATE_ADD() → Add interval to date
SELECT DATE_ADD(NOW(), INTERVAL 5 DAY) AS date_plus_5_days;

-- 6. DATE_SUB() → Subtract interval from date
SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH) AS date_minus_1_month;

-- 7. DAY() → Extract day from a date
SELECT DAY(NOW()) AS today_day;

-- 8. MONTH() → Extract month from a date
SELECT MONTH(NOW()) AS current_month;

-- 9. YEAR() → Extract year from a date
SELECT YEAR(NOW()) AS current_year;
