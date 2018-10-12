DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL  AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    price INT(10),
    stock_quantity INT(10)
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("echo dot", "electronics", 50, 3500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("floor lamp", "home goods", 80, 1500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("shower head", "bathroom", 45, 2500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("computer monitor", "electronics", 150, 800);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("midi guitar", "electronics", 450, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Allen & Heath headphones", "electronics", 250, 900);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Singer sewing machine", "home appliances", 350, 750);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Lifx wifi lightbulb", "electronics", 49, 550);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("flower vase", "home goods", 15, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("lawnmower", "garden", 325, 400);
