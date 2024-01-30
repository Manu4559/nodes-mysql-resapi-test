-- Crear una base de datos si no existe.
CREATE DATABASE IF NOT EXISTS companydb;

-- Crear tabla
USE companydb
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Insertar registros
INSERT INTO employee VALUES 
    (1, "Joe", 1000),
    (2, "Henry", 2000),
    (3, "Sam", 2500),
    (4, "Max", 1500)
