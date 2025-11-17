
> 17-11-25

- Group clause : applied on the grouped column data along with aggreagate or group functions.
- Group functions :
    - sum() 
    - max()
    - min()
    - Avg()
    - count()

- Scalar function() -> return only one record - where clause
- Multi row function -> return multiple records - group by clause

- Having clause : It is also condition clasuse, used with group by clause, when multiple row are retriving on group functions to retrive conditioned data we use the having clause. 

- OrderBy: Display in ascending or descending it can apply on text (A-Z), number(0,9),date(latest to earlier date)

### Constrains : 
- Null: empty by default any column will be Null;
- Not null : You must insert the data but that column can be have duplicates 
- Unique : It will have the unique data and will allow the null value 
- Primary Key : It is combination of unique + not null, we can have only one primary key to a table .
    - note: primary key features can apply on more than one column know ass compoite primary key 

```sql
pid number(5) check (pid > 1000) primary key, --Table level constrain
pname varchar(30),
buyPrice number(6,2),
```
```sql
pid number(5) check (pid > 1000),
pname varchar(30),
buyPrice number(6,2),
primary key (pid,pname); -- composite primary key(Table level constrain)
```

- Candidate Key: A minimal set of columns that can uniquely identify each row in a table.

“Minimal” means:

It must uniquely identify each record.

It should not contain any extra (unnecessary) column.

- Foreign Key : Refer to primary key column it can be same table(self referential foreign key 
) or another table .
- self referential foreign key : It can allow duplicate values.

- Check : It is verify the condition before you insert the data into a column 
```sql
Age int(5) check age>18;
```
- Default : When no value is given, default value will assign to a column

```sql
Dot date default(now())
```

### Joins:
- Retrieve the data from more than one table based on common column or common data
- Inner Join : Returns only matching rows from both tables .
- Left join (Left outer join) : Returns all rows from the left table + matching rows from the right table.
- Right JOin(Right outer join): Returns all rows from the right table + matchingrows from the left table.
- Full outer join: Mysql does not support full join directly -> use union of left + right joins.
- Self join : Join a table with itself(used for hierarchical data)
- Cross join : Returns the cartesian product (every row x every row).