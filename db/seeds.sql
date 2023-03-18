INSERT INTO department (department_name)
VALUES ("Operations"),
       ("Legal"),
       ("Compliance"),
       ("Client Services"),
       ("Treasury");

INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 100000, 1),
       ("Operations Specialist", 60000, 1),
       ("General Counsel", 250000, 2),
       ("Compliance Specialist", 120000, 3),
       ("Compliance Manager", 150000, 3),
       ("Client Services Rep", 50000, 4),
       ("Client Services Manager", 100000, 4),
       ("Treasury Associate", 75000, 5),
       ("Treasury Manager", 120000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Sanchez", 1, NULL),
       ("Dan", "Sassy", 2, 1),
       ("Jeremy", "Harrison", 2, 1),
       ("Johnny", "Quest", 3, NULL),
       ("Kirt", "Merritt", 5, NULL),
       ("Tony", "Carl", 4, 5),
       ("Biff", "Stevens", 4, 5),
       ("Sweeney", "Todd", 7, NULL),
       ("Amy", "Adamson", 6, 8),
       ("Paul", "Foley", 6, 8),
       ("Karen", "Crow", 6, 8),
       ("Desiree", "Sanderson", 9, NULL),
       ("Carlos", "Garcia", 8, 12),
       ("Sally", "Johnson", 8, 12),
       ("Eric", "Smalls", 2, 1),
       ("Keisha", "Martins", 2, 1);
       
        