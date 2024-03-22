-- drops old books databases if it exits
DROP DATABASE IF EXISTS employees_db;
-- create a books database
CREATE DATABASE employees_db;
-- go into the database
use employees_db;

-- create the tables
create table department(
    id int not null auto_increment primary key,
    name varchar(30)
);

create table role(
    id int not null auto_increment primary key,
    title varchar(30),
    salary decimal,
    department_id int,
    foreign key (department_id)
    references department(id)
);

create table employee(
    id int not null auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    foreign key (role_id)
    references role(id)
);