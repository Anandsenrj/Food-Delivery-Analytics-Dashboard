-- revenue summary view
CREATE VIEW RevenueSummary AS
SELECT
COUNT(*) TotalOrders,
ROUND(SUM(order_value),2) Revenue,
ROUND(AVG(order_value),2) AvgOrder
FROM orders;

-- Delivery Summary View
CREATE VIEW DeliverySummary AS
SELECT
ROUND(AVG(delivery_time_actual),2) AvgTime,
ROUND(AVG(delivery_delay),2) AvgDelay,
ROUND(AVG(delivery_distance),2) AvgDistance
FROM deliveries;

-- customers summary view
CREATE VIEW CustomerSummary AS
SELECT
COUNT(*) Customers,
ROUND(AVG(customer_rating),2) AvgRating
FROM customers;

SELECT DATABASE();
SHOW VARIABLES LIKE 'port';