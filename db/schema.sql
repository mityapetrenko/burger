create database burgers_db;
 
use burgers_db;

CREATE TABLE burgers_db.burgers
(
    id INT NOT NULL auto_increment PRIMARY KEY, -- primary key column
    burger_name VARCHAR(50) NOT NULL,
    devoured boolean
    -- specify more columns here
);
