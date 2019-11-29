DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id Int (50) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN NOT NULL Default 0,
PRIMARY KEY (id)
);

