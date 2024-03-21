-- drops old books databases if it exits
DROP DATABASE IF EXISTS employees_db;
-- create a books database
CREATE DATABASE employees_db;
-- go into the database
use employees_db;

-- create the tables
create table department(
    id int not null,
    name varchar(30),
    primary key (id)
);

create table role(
    id int not null,
    title varchar(30),
    salary decimal,
    department_id int,
    primary key (id),
    foreign key (department_id)
    references department(id)
);

create table employee(
    id int not null,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    foreign key (role_id)
    references role(id)
);