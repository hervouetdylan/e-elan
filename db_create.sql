CREATE TABLE `user`(
    `user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `is_seller` TINYINT(1) NOT NULL
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_user_id_primary`(`user_id`);
CREATE TABLE `categories`(
    `category_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `categories` ADD PRIMARY KEY `categories_category_id_primary`(`category_id`);
CREATE TABLE `product`(
    `product_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(255) NOT NULL,
    `product_description` TEXT NOT NULL,
    `id_category` BIGINT NOT NULL,
    `product_image` VARCHAR(200) NOT NULL,
    `retailer_id` BIGINT NOT NULL,
    `price` BIGINT NULL
);
ALTER TABLE
    `product` ADD PRIMARY KEY `product_product_id_primary`(`product_id`);
CREATE TABLE `cart`(
    `cart__id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL
);
ALTER TABLE
    `cart` ADD PRIMARY KEY `cart_cart__id_primary`(`cart__id`);
CREATE TABLE `cart_table`(
    `cart_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` BIGINT NOT NULL,
    `quantity` BIGINT NOT NULL
);
ALTER TABLE
    `cart_table` ADD PRIMARY KEY `cart_table_cart_id_primary`(`cart_id`);
ALTER TABLE
    `cart_table` ADD PRIMARY KEY `cart_table_product_id_primary`(`product_id`);
ALTER TABLE
    `product` ADD CONSTRAINT `product_id_category_foreign` FOREIGN KEY(`id_category`) REFERENCES `categories`(`category_id`);
ALTER TABLE
    `product` ADD CONSTRAINT `product_retailer_id_foreign` FOREIGN KEY(`retailer_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `cart` ADD CONSTRAINT `cart_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`);