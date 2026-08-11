CREATE DATABASE FoodDeliveryDB;

USE FoodDeliveryDB;

CREATE TABLE Customers(
customer_id VARCHAR(50) PRIMARY KEY,
age INT,
gender VARCHAR(20),
location VARCHAR(50),
order_history INT,
customer_rating DECIMAL(3,1),
preferred_cuisine VARCHAR(50),
order_frequency VARCHAR(30),
loyalty_program VARCHAR(10)
);

CREATE TABLE Restaurants(
restaurant_id INT PRIMARY KEY
);

CREATE TABLE Food_Items(
food_item_id INT AUTO_INCREMENT PRIMARY KEY,
food_item VARCHAR(100),
food_temperature VARCHAR(20),
food_freshness INT,
packaging_quality INT,
food_condition VARCHAR(30)
);

CREATE TABLE Orders(
order_id VARCHAR(20) PRIMARY KEY,
customer_id VARCHAR(50),
restaurant_id INT,
food_item_id INT,
order_date DATE,
order_value DECIMAL(10,2),
delivery_method VARCHAR(20),
customer_satisfaction INT,
FOREIGN KEY(customer_id) REFERENCES Customers(customer_id),
FOREIGN KEY(restaurant_id) REFERENCES Restaurants(restaurant_id),
FOREIGN KEY(food_item_id) REFERENCES Food_Items(food_item_id)
);

CREATE TABLE Deliveries(
delivery_id INT AUTO_INCREMENT PRIMARY KEY,
order_id VARCHAR(20),
delivery_distance DECIMAL(6,2),
delivery_time_actual DECIMAL(6,2),
delivery_delay DECIMAL(6,2),
traffic_condition VARCHAR(20),
weather_condition VARCHAR(20),
route_taken VARCHAR(50),
route_type VARCHAR(30),
route_efficiency DECIMAL(8,6),
small_route BOOLEAN,
bike_friendly_route BOOLEAN,
predicted_delivery_mode VARCHAR(30),
traffic_avoidance VARCHAR(10),
FOREIGN KEY(order_id) REFERENCES Orders(order_id)
);

CREATE TABLE RawOrders (
    order_id VARCHAR(20),
    customer_id VARCHAR(50),
    restaurant_id INT,
    food_item VARCHAR(100),
    order_date DATE,
    order_value DECIMAL(10,2),
    delivery_method VARCHAR(20),
    delivery_distance DECIMAL(6,2),
    delivery_time_actual DECIMAL(6,2),
    delivery_delay DECIMAL(6,2),
    traffic_condition VARCHAR(30),
    weather_condition VARCHAR(30),
    route_taken VARCHAR(100),
    route_type VARCHAR(50),
    route_efficiency DECIMAL(8,6),
    small_route BOOLEAN,
    bike_friendly_route BOOLEAN,
    predicted_delivery_mode VARCHAR(30),
    traffic_avoidance VARCHAR(20),
    age INT,
    gender VARCHAR(20),
    location VARCHAR(100),
    order_history INT,
    customer_rating DECIMAL(3,1),
    preferred_cuisine VARCHAR(50),
    order_frequency VARCHAR(30),
    loyalty_program VARCHAR(10),
    food_temperature VARCHAR(30),
    food_freshness INT,
    packaging_quality INT,
    food_condition VARCHAR(30),
    customer_satisfaction INT
);

INSERT INTO customers(    
	customer_id,
    age,
    gender,
    location,
    order_history,
    customer_rating,
    preferred_cuisine,
    order_frequency,
    loyalty_program
)

SELECT DISTINCT
    customer_id,
    age,
    gender,
    location,
    order_history,
    customer_rating,
    preferred_cuisine,
    order_frequency,
    loyalty_program

FROM raworders;

INSERT INTO restaurants( restaurant_id)

SELECT DISTINCT restaurant_id FROM raworders;

SELECT * FROM restaurants LIMIT 10;

INSERT INTO food_items
(
    food_item,
    food_temperature,
    food_freshness,
    packaging_quality,
    food_condition
)

SELECT DISTINCT
    food_item,
    food_temperature,
    food_freshness,
    packaging_quality,
    food_condition
FROM raworders;




INSERT INTO food_items
(
    food_item,
    food_temperature,
    food_freshness,
    packaging_quality,
    food_condition
)

SELECT DISTINCT
    food_item,
    food_temperature,
    food_freshness,
    packaging_quality,
    food_condition

FROM raworders;




INSERT INTO orders
(
    order_id,
    customer_id,
    restaurant_id,
    food_item_id,
    order_time,
    order_value,
    delivery_method,
    customer_satisfaction
)
SELECT
    r.order_id,
    r.customer_id,
    r.restaurant_id,
    f.food_item_id,
    CAST(r.order_time AS DATETIME),
    r.order_value,
    r.delivery_method,
    r.customer_satisfaction
FROM raworders r
JOIN food_items f
ON r.food_item = f.food_item
AND r.food_temperature = f.food_temperature
AND r.food_freshness = f.food_freshness
AND r.packaging_quality = f.packaging_quality
AND r.food_condition = f.food_condition;


SELECT COUNT(*) AS TotalOrders
FROM orders;

SELECT
    r.order_id,
    COUNT(*) AS matches
FROM raworders r
JOIN food_items f
ON r.food_item = f.food_item
AND r.food_temperature = f.food_temperature
AND r.food_freshness = f.food_freshness
AND r.packaging_quality = f.packaging_quality
AND r.food_condition = f.food_condition
GROUP BY r.order_id
HAVING COUNT(*) > 1;



INSERT INTO deliveries
(
    order_id,
    delivery_distance,
    delivery_time_actual,
    delivery_delay,
    traffic_condition,
    weather_condition,
    route_taken,
    route_type,
    route_efficiency,
    small_route,
    bike_friendly_route,
    predicted_delivery_mode,
    traffic_avoidance
)

SELECT

    order_id,
    delivery_distance,
    delivery_time_actual,
    delivery_delay,
    traffic_condition,
    weather_condition,
    route_taken,
    route_type,
    route_efficiency,

    CASE
        WHEN small_route='True' THEN 1
        ELSE 0
    END,

    CASE
        WHEN bike_friendly_route='True' THEN 1
        ELSE 0
    END,

    predicted_delivery_mode,
    traffic_avoidance

FROM raworders;

SELECT COUNT(*)
FROM deliveries;


ALTER TABLE raworders
MODIFY order_time DATE;

ALTER TABLE raworders
MODIFY delivery_time DATE;

DESCRIBE restaurants;
SHOW COLUMNS FROM restaurants;
DESCRIBE orders;
