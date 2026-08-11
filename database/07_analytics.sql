
-- Total Orders
SELECT COUNT(*) AS Total_Orders
FROM orders;

-- Total Revenue
SELECT
ROUND(SUM(order_value),2) AS Total_Revenue
FROM orders;

-- Average Order Value
SELECT
ROUND(AVG(order_value),2) AS Average_Order_Value
FROM orders;

-- Highest Order Value
SELECT
MAX(order_value) AS Highest_Order
FROM orders;

-- Lowest Order Value
SELECT
MIN(order_value) AS Lowest_Order
FROM orders;

-- Top 10 Customers by Spending
SELECT
    c.customer_id,
    ROUND(SUM(o.order_value),2) AS TotalSpent
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY TotalSpent DESC
LIMIT 10;

-- Top 10 Restaurants by Revenue
SELECT
    r.restaurant_id,
    ROUND(SUM(o.order_value),2) AS Revenue
FROM restaurants r
JOIN orders o
ON r.restaurant_id = o.restaurant_id
GROUP BY r.restaurant_id
ORDER BY Revenue DESC
LIMIT 10;

-- Average Delivery Delay
SELECT
ROUND(AVG(delivery_delay),2) AS Average_Delay
FROM deliveries;

-- Average Delivery Distance
SELECT
ROUND(AVG(delivery_distance),2) AS Average_Distance
FROM deliveries;

-- Delivery Method Distribution 
SELECT
delivery_method,
COUNT(*) AS TotalOrders
FROM orders
GROUP BY delivery_method
ORDER BY TotalOrders DESC;

-- Total Customers
SELECT COUNT(*)
FROM customers;

-- Total Restaurants 
SELECT COUNT(*)
FROM restaurants;

-- Avg Customer Rating
SELECT
ROUND(AVG(customer_rating),2)
FROM customers;

-- high Rated Customers
SELECT
customer_id,
customer_rating
FROM customers
ORDER BY customer_rating DESC
LIMIT 10;

-- Customers by genders
SELECT
gender,
COUNT(*) TotalCustomers
FROM customers
GROUP BY gender;

-- Loyalty program members
SELECT
loyalty_program,
COUNT(*)
FROM customers
GROUP BY loyalty_program;

-- Preffered Cusine
SELECT
preferred_cuisine,
COUNT(*)
FROM customers
GROUP BY preferred_cuisine
ORDER BY COUNT(*) DESC;
-- ----------------------------------------------------  


-- Top 10 Restaurants
SELECT
restaurant_id,
SUM(order_value) Revenue
FROM orders
GROUP BY restaurant_id
ORDER BY Revenue DESC
LIMIT 10;

-- orders per restaurants
SELECT
restaurant_id,
COUNT(*) Orders
FROM orders
GROUP BY restaurant_id
ORDER BY Orders DESC;

-- ------------------------------------------------

-- most ordered food
SELECT
food_item,
COUNT(*) Orders
FROM food_items
GROUP BY food_item
ORDER BY Orders DESC;

-- food condition
SELECT
food_condition,
COUNT(*)
FROM food_items
GROUP BY food_condition;

-- packagng quality 
SELECT
packaging_quality,
COUNT(*)
FROM food_items
GROUP BY packaging_quality;

-- ---------------------------------



-- delivery method
SELECT
delivery_method,
COUNT(*) Orders
FROM orders
GROUP BY delivery_method;

-- weather impact
SELECT
weather_condition,
ROUND(AVG(delivery_delay),2)
FROM deliveries
GROUP BY weather_condition;

-- traffic impact
SELECT 
    traffic_condition, ROUND(AVG(delivery_delay), 2)
FROM
    deliveries
GROUP BY traffic_condition;

-- best route
SELECT
route_taken,
ROUND(AVG(delivery_time_actual),2)
FROM deliveries
GROUP BY route_taken
ORDER BY 2;

-- delivery mode prediction
SELECT
predicted_delivery_mode,
COUNT(*)
FROM deliveries
GROUP BY predicted_delivery_mode;
-- ------------------------------------------------


-- orders per month
SELECT
MONTH(order_time) Month,
COUNT(*) Orders
FROM orders
GROUP BY Month;

-- revenve per mon
SELECT
MONTH(order_time) Month,
ROUND(SUM(order_value),2)
FROM orders
GROUP BY Month;
