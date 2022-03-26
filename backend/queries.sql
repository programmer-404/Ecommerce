CREATE SCHEMA `ecommerce` ;

CREATE TABLE `ecommerce`.`users` (
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NULL,
  `date_of_birth` DATE NULL,
  `mobile_no` VARCHAR(25) NULL,
  `address` TEXT NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `is_user_active` INT NULL,
  `is_user_blocked` INT NULL,
  `creation_time` TIMESTAMP NULL,
  PRIMARY KEY (`username`));

CREATE TABLE `ecommerce`.`users_audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NULL,
  `date_of_birth` DATE NULL,
  `mobile_no` VARCHAR(25) NULL,
  `address` TEXT NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `is_user_active` INT NULL,
  `is_user_blocked` INT NULL,
  `change_date` TIMESTAMP NULL,
  `action` VARCHAR(55) NULL,
  PRIMARY KEY (`id`));

CREATE TRIGGER before_users_update 
    BEFORE UPDATE ON `ecommerce`.`users`
    FOR EACH ROW 
 INSERT INTO `ecommerce`.`users_audit`
 SET action = 'update',
    `username` = OLD.username,
    `password` = OLD.password,
    `date_of_birth` = OLD.date_of_birth,
    `mobile_no` = OLD.mobile_no,
    `address` = OLD.address,
    `first_name` = OLD.first_name,
    `last_name` = OLD.last_name,
    `is_user_active` = OLD.is_user_active,
    `is_user_blocked`= OLD.is_user_blocked,
    `change_date` = NOW();

CREATE TABLE `ecommerce`.`admin` (
  `ad_username` VARCHAR(255) NOT NULL,
  `ad_password` VARCHAR(255) NULL,
  `date_of_birth` DATE NULL,
  `mobile_no` VARCHAR(25) NULL,
  `address` TEXT NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `is_admin_active` INT NULL,
  `is_admin_blocked` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `admin_type` VARCHAR(20) NULL,
  PRIMARY KEY (`ad_username`));

CREATE TABLE `ecommerce`.`admin_audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ad_username` VARCHAR(255) NOT NULL,
  `ad_password` VARCHAR(255) NULL,
  `date_of_birth` DATE NULL,
  `mobile_no` VARCHAR(25) NULL,
  `address` TEXT NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `is_admin_active` INT NULL,
  `is_admin_blocked` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `admin_type` VARCHAR(20) NULL,
  `action` VARCHAR(55) NULL,
  PRIMARY KEY (`id`));

CREATE TRIGGER before_admin_update 
    BEFORE UPDATE ON `ecommerce`.`admin`
    FOR EACH ROW 
 INSERT INTO `ecommerce`.`admin_audit`
 SET action = 'update',
    `ad_username` = OLD.ad_username,
    `ad_password` = OLD.ad_password,
    `date_of_birth` = OLD.date_of_birth,
    `mobile_no` = OLD.mobile_no,
    `address` = OLD.address,
    `first_name` = OLD.first_name,
    `last_name` = OLD.last_name,
    `is_admin_active` = OLD.is_admin_active,
    `is_admin_blocked`= OLD.is_admin_blocked,
    `admin_type` = OLD.admin_type,
    `change_date` = NOW();


CREATE TABLE `ecommerce`.`products` (
  `product_id` VARCHAR(255) NOT NULL,
  `product_name` VARCHAR(255) NULL,
  `product_image` VARCHAR(255) NULL,
  `category` VARCHAR(25) NULL,
  `product_description` TEXT NULL,
  `product_sub_category` VARCHAR(255) NULL,
  `company_name` VARCHAR(255) NULL,
  `product_rating` INT NULL,
  `is_active` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `product_quantity` INT NULL,
  `display_status` INT NULL,
  PRIMARY KEY (`product_id`));

CREATE TABLE `ecommerce`.`products_audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` VARCHAR(255) NOT NULL,
  `product_name` VARCHAR(255) NULL,
  `product_image` VARCHAR(255) NULL,
  `category` VARCHAR(25) NULL,
  `product_description` TEXT NULL,
  `product_sub_category` VARCHAR(255) NULL,
  `company_name` VARCHAR(255) NULL,
  `product_rating` INT NULL,
  `is_active` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `product_quantity` INT NULL,
  `display_status` INT NULL,
  `action` VARCHAR(55) NULL,
  PRIMARY KEY (`id`));

CREATE TRIGGER before_product_update 
    BEFORE UPDATE ON `ecommerce`.`products`
    FOR EACH ROW 
 INSERT INTO `ecommerce`.`products_audit`
 SET action = 'update',
    `product_id` = OLD.product_id,
    `product_name` = OLD.product_name,
    `product_image` = OLD.product_image,
    `product_description` = OLD.product_description,
    `category` = OLD.category,
    `product_sub_category` = OLD.product_sub_category,
    `company_name` = OLD.company_name,
    `product_rating` = OLD.product_rating,
    `is_active`= OLD.is_active,
    `product_quantity` = OLD.product_quantity,
    `display_status`= OLD.display_status,
    `change_date` = NOW();


CREATE TABLE `ecommerce`.`category` (
  `category_name` VARCHAR(155) NOT NULL,
  `category_description` TEXT NULL,
  `is_active` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `display_status` INT NULL,
  PRIMARY KEY (`category_name`));

CREATE TABLE `ecommerce`.`sub_category` (
  `sub_category_name` VARCHAR(155) NOT NULL,
  `sub_category_description` TEXT NULL,
  `is_active` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `display_status` INT NULL,
  PRIMARY KEY (`sub_category_name`));

CREATE TABLE `ecommerce`.`brand` (
  `brand_name` VARCHAR(155) NOT NULL,
  `brand_description` TEXT NULL,
  `is_active` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `display_status` INT NULL,
  PRIMARY KEY (`brand_id`));


CREATE TABLE `ecommerce`.`orders` (
  `order_id` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NULL,
  `delivery_date` DATE NULL,
  `order_date` DATE NULL,
  `delivery_address` TEXT NULL,
  `product_id` VARCHAR(255) NULL,
  `order_status` INT NULL,
  `product_quantity` INT NULL,
  `payment_status` INT NULL,
  `creation_time` TIMESTAMP NULL,
  PRIMARY KEY (`order_id`));


CREATE TABLE `ecommerce`.`orders_audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NULL,
  `delivery_date` DATE NULL,
  `order_date` DATE NULL,
  `delivery_address` TEXT NULL,
  `product_id` VARCHAR(255) NULL,
  `order_status` INT NULL,
  `product_quantity` INT NULL,
  `payment_status` INT NULL,
  `creation_time` TIMESTAMP NULL,
  `action` VARCHAR(55) NULL,
  PRIMARY KEY (`id`));

CREATE TRIGGER before_order_update 
    BEFORE UPDATE ON `ecommerce`.`orders`
    FOR EACH ROW 
 INSERT INTO `ecommerce`.`orders_audit`
 SET action = 'update',
    `order_id` = OLD.order_id,
    `user_name` = OLD.user_name,
    `delivery_date` = OLD.delivery_date,
    `order_date` = OLD.order_date,
    `delivery_address` = OLD.delivery_address,
    `product_id` = OLD.product_id,
    `order_status` = OLD.order_status,
    `product_quantity` = OLD.product_quantity,
    `payment_status`= OLD.payment_status,
    `change_date` = NOW();


CREATE TABLE `ecommerce`.`payment` (
  `payment_id` VARCHAR(255) NOT NULL,
  `payment_mode` VARCHAR(55) NULL,
  `order_id` VARCHAR(255) NULL,
  `payment_status` INT NULL,
  `payable_amount` INT NULL,
  `paid_amount` INT NULL,
  `remaining_amount` INT NULL,
  `creation_time` TIMESTAMP NULL,
  PRIMARY KEY (`payment_id`));

CREATE TABLE `ecommerce`.`payment_audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_id` VARCHAR(255) NOT NULL,
  `payment_mode` VARCHAR(55) NULL,
  `order_id` VARCHAR(255) NULL,
  `payment_status` INT NULL,
  `payable_amount` INT NULL,
  `paid_amount` INT NULL,
  `remaining_amount` INT NULL,
  `change_date` TIMESTAMP NULL,
  `action` VARCHAR(55) NULL,
  PRIMARY KEY (`id`));

CREATE TRIGGER before_payment_update 
    BEFORE UPDATE ON `ecommerce`.`payment`
    FOR EACH ROW 
  INSERT INTO `ecommerce`.`payment_audit`
  SET action = 'update',
    `payment_id` = OLD.payment_id,
    `payment_mode` = OLD.payment_mode,
    `order_id` = OLD.order_id,
    `payment_status` = OLD.payment_status,
    `payable_amount` = OLD.payable_amount,
    `paid_amount` = OLD.paid_amount,
    `remaining_amount` = OLD.remaining_amount,
    `change_date` = NOW();