CREATE DATABASE IF NOT EXISTS db_usof;

CREATE USER 'ysemeniuk'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON db_usof.* TO 'ysemeniuk'@'localhost';
FLUSH PRIVILEGES;

USE db_usof;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    avatar VARCHAR(50),
    login VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    activationLink VARCHAR(255) UNIQUE NOT NULL,
    status ENUM ('admin', 'user') DEFAULT 'user',
    verify ENUM ('false', 'true') DEFAULT 'false',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    refreshToken VARCHAR(600) UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_author_post INT DEFAULT 0,
    title_post VARCHAR(50),
    content_post VARCHAR(255) NOT NULL,
    block_post ENUM ('true', 'false') DEFAULT 'false',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT DEFAULT 0,
    id_author_category INT DEFAULT 0,
    title_category VARCHAR(50) NOT NULL,
    block_category ENUM ('true', 'false') DEFAULT 'false',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT,
    id_author_comment INT DEFAULT 0,
    content_comment VARCHAR(255) NOT NULL ,
    block_comment ENUM ('true', 'false') DEFAULT 'false',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT,
    id_comment INT,
    like_login VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- UPDATE users SET status = "admin", WHERE email = "jekasemenuk@ukr.net" OR email = "jekasemenuk@icloud.com";

-- INSERT INTO users (photo,login,password,email,status)
-- VALUES ('./bla-bla-bla', 'ysemeniuk', 'ysemeniuk', 'jekasemenuk@ukr.net', 'admin'),
-- ('./bla-bla-bla', 'yevhen', 'ysemeniuk', 'jekasemenuk@gmail.com', 'user');

