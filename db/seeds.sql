INSERT INTO department (name)
values  ("Font of House"),
        ("Back of House"),
        ("Pros"),
        ("Manager");

INSERT INTO role (title, salary, department_id)
values  ("Server", 5000.00, 1),
        ("ToGo", 20000.00, 1),
        ("Host", 10000.00, 1),
        ("Line", 30000.00, 2),
        ("Production", 45000.00, 2),
        ("Dish", 40000.00, 2),
        ("Font of house Pro", 60000.00, 3),
        ("Back of house Pro", 50000.00, 3),
        ("Culinary Manager", 80000.00, 4),
        ("Server Manager", 80000.00, 4),
        ("LBO Manager", 80000.00, 4),
        ("General Manager", 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
values  ("Alex", "Ryder", 2, 11),
        ("Alyssa", "Anderson", 2, 11),
        ("Kanon", "Hymas", 2, 11),
        ("Jessi", "Lynch", 2, 11),
        ("Paige", "Thole", 1, 10),
        ("Nicholas", "Roberts", 1, 10),
        ("Brynn", "Poter", 1, 10),
        ("Val", "Gil", 1, 10),
        ("Riley", "Thole", 3, 11),
        ("Dalton", "Drew", 3, 11),
        ("Kayla", "Williams", 5, 9),
        ("Joel", "Smith", 5, 9),
        ("Ricky", "Guy", 6, 6),
        ("Kelsy", "gray", 6, 9),
        ("Leo", "Congor", 5, 9),
        ("Brain", "James", 5, 9),
        ("Terra", "Ewel", 7, 12),
        ("Jax", "Jackson", 8, 12),
        ("Jessica", "wells", 10, 12),
        ("Mitch", "Rasmasen", 9, 12),
        ("Wendy", "Moree", 11, 12),
        ("Darren", "Lindo", 12, 12);
