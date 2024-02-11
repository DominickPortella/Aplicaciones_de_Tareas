CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    tittle VARCHAR(100) NOT NULL,
    description TEXT;
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, desscription) VALUES
    ('Task 1', 'Description 1')
    ('Task 2', 'Description 2')
    ('Task 3', 'Description 3');