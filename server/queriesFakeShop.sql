CREATE DATABASE fakeShop;

USE fakeShop;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  img VARCHAR(255) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

USE fakeShop;
INSERT INTO users (email, password)
VALUES 
  ('test1@gmail.com', '$2a$10$4IUdRkGQUQ3uKqDUKBnli.l6TzYI3WYt9w7EUDz8k5akInCvF7jiy'),
  ('test2@gmail.com', '$2a$10$Y0UDlRrgdx9PW9EmrrwJuuzmcQY2rBnIPxpzw4C3ps5meFOb9kCeu');

USE fakeShop;
INSERT INTO products (category, name, price, img, user_id) 
VALUES ('Laptops', 'Macbook Pro', 1900.00, 'https://imageio.forbes.com/specials-images/imageserve/640e043c5321270f2db50057/2020-Apple-MacBook-Pro/0x0.jpg?crop=1934,1087,x205,y80,safe&height=399&width=711&fit=bounds', 1);

INSERT INTO products (category, name, price, img, user_id) 
VALUES ('Smartphones', 'Iphone 15', 1400.00, 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fiphone-15-pro-max-dark-red-color-details-info-000.jpg?w=960&cbr=1&q=90&fit=max', 2);

INSERT INTO products (category, name, price, img, user_id) 
VALUES ('Headphones', 'OPPO PM-3', 300.00, 'https://images.hifiplus.com/wp-content/uploads/2021/06/PM-3_Black_and_White.jpg', 1);


USE fakeShop;
SELECT * FROM users;

USE fakeShop;
SELECT * FROM products;

DROP DATABASE fakeShop;
