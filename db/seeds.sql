INSERT INTO department (id, name)
values  (1,"Font of House"),
        (2,"Back of House"),
        (3,"Pros"),
        (4,"Manager");

INSERT INTO role (id, title, salary, department_id)
values  (1,"Server", 5000.00, 1),
        (2,"ToGo", 20000.00, 1),
        (3,"Host", 10000.00, 1),
        (4,"Line", 30000.00, 2),
        (5,"Production", 45000.00, 2),
        (6,"Dish", 40000.00, 2),
        (7,"Font of house Pro", 60000.00, 3),
        (8,"Back of house Pro", 50000.00, 3),
        (9,"Culinary Manager", 80000.00, 4),
        (10,"Server Manager", 80000.00, 4),
        (11,"LBO Manager", 80000.00, 4),
        (12,"General Manager", 100000.00, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values  (1, "Alex", "Ryder", 2, 11),
        (2, "Alyssa", "Anderson", 2, 11),
        (3, "Kanon", "Hymas", 2, 11),
        (4, "Jessi", "Lynch", 2, 11),
        (5, "Paige", "Thole", 1, 10),
        (6, "Nicholas", "Roberts", 1, 10),
        (7, "Brynn", "Poter", 1, 10),
        (8, "Val", "Gil", 1, 10),
        (9, "Riley", "Thole", 3, 11),
        (10, "Dalton", "Drew", 3, 11),
        (11, "Kayla", "Williams", 5, 9),
        (12, "Joel", "Smith", 5, 9),
        (13, "Ricky", "Guy", 6, 6),
        (14, "Kelsy", "gray", 6, 9),
        (15, "Leo", "Congor", 5, 9),
        (16, "Brain", "James", 5, 9),
        (17, "Terra", "Ewel", 7, 12),
        (18, "Jax", "Jackson", 8, 12),
        (19, "Jessica", "wells", 10, 12),
        (20, "Mitch", "Rasmasen", 9, 12),
        (21, "Wendy", "Moree", 11, 12),
        (22, "Darren", "Lindo", 12, 12);
