create database tsbatch70;

show databases;

use tsbatch70;

show tables;

CREATE TABLE EMP(eid int(5), ename varchar(30), job varchar(30), salary double(10,2), DOJ date);

desc Emp;

INSERT INTO EMP VALUES( 101, "Tarun","Full Stack Developer", 400000.00,"2025-07-15");

INSERT INTO EMP(ENAME,SALARY) VALUES("SAI",500000.00);

INSERT INTO EMP VALUES( 102, "Ganesh","Typescript Developer", 600000.00,"2024-07-15");
INSERT INTO EMP VALUES( 103, "Alla","React Native Developer", 300000.00,"2024-05-15");


ALTER TABLE EMP ADD COLUMN(phone int,email varchar(30));
ALTER TABLE EMP MODIFY COLUMN ename varchar(40);
ALTER TABLE EMP RENAME COLUMN phone To mobile;

ALTER TABLE EMP DROP COLUMN EMAIL;
ALTER TABLE EMP DROP COLUMN Mobile;
SET AUTOCOMMIT = 1;
DELETE FROM EMP WHERE ename = "SAI";
commit;
rollback;

UPDATE emp  SET ename = 'Tarun Sai' WHERE ename = 'Tarun';
UPDATE emp SET ename = 'Tarun Sai',job = 'Senior Full Stack Developer',salary = 750000 WHERE eid = 101;


truncate table emp;

SELECT * FROM EMP;
