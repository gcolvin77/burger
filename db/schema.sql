DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NULL,
  devoured BOOLEAN NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;
