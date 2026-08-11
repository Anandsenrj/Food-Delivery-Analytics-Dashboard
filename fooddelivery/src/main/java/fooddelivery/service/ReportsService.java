package fooddelivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.entity.Customers;
import fooddelivery.entity.Deliveries;
import fooddelivery.entity.Orders;
import fooddelivery.repository.CustomersRepository;
import fooddelivery.repository.DeliveriesRepository;
import fooddelivery.repository.OrdersRepository;

@Service
public class ReportsService {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private CustomersRepository customersRepository;

    @Autowired
    private DeliveriesRepository deliveriesRepository;


    // =========================
    // ORDERS CSV
    // =========================

    public String generateOrdersCSV() {

        List<Orders> orders = ordersRepository.findAll();

        StringBuilder csv = new StringBuilder();

        csv.append(
            "Order ID,Customer ID,Restaurant ID,Food Item ID,"
            + "Order Time,Order Value,Delivery Method,Customer Satisfaction\n"
        );

        for (Orders order : orders) {

            csv.append(safe(order.getOrderId())).append(",");

            csv.append(safe(order.getCustomerId())).append(",");

            csv.append(safe(order.getRestaurantId())).append(",");

            csv.append(safe(order.getFoodItemId())).append(",");

            csv.append(safe(order.getOrderTime())).append(",");

            csv.append(safe(order.getOrderValue())).append(",");

            csv.append(safe(order.getDeliveryMethod())).append(",");

            csv.append(safe(order.getCustomerSatisfaction())).append("\n");
        }

        return csv.toString();
    }


    // =========================
    // CUSTOMERS CSV
    // =========================

    public String generateCustomersCSV() {

        List<Customers> customers = customersRepository.findAll();

        StringBuilder csv = new StringBuilder();

        csv.append(
            "Customer ID,Age,Gender,Location,Order History,"
            + "Customer Rating,Preferred Cuisine,Order Frequency,Loyalty Program\n"
        );

        for (Customers customer : customers) {

            csv.append(safe(customer.getCustomerId())).append(",");

            csv.append(safe(customer.getAge())).append(",");

            csv.append(safe(customer.getGender())).append(",");

            csv.append(safe(customer.getLocation())).append(",");

            csv.append(safe(customer.getOrderHistory())).append(",");

            csv.append(safe(customer.getCustomerRating())).append(",");

            csv.append(safe(customer.getPreferredCuisine())).append(",");

            csv.append(safe(customer.getOrderFrequency())).append(",");

            csv.append(safe(customer.getLoyaltyProgram())).append("\n");
        }

        return csv.toString();
    }


    // =========================
    // DELIVERIES CSV
    // =========================

    public String generateDeliveriesCSV() {

        List<Deliveries> deliveries = deliveriesRepository.findAll();

        StringBuilder csv = new StringBuilder();

        csv.append(
            "Delivery ID,Order ID,Delivery Distance,Actual Delivery Time,"
            + "Delivery Delay,Traffic Condition,Weather Condition,"
            + "Route Taken,Route Type,Route Efficiency,Small Route,"
            + "Bike Friendly Route,Predicted Delivery Mode,Traffic Avoidance\n"
        );

        for (Deliveries delivery : deliveries) {

            csv.append(safe(delivery.getDeliveryId())).append(",");

            csv.append(safe(delivery.getOrderId())).append(",");

            csv.append(safe(delivery.getDeliveryDistance())).append(",");

            csv.append(safe(delivery.getDeliveryTimeActual())).append(",");

            csv.append(safe(delivery.getDeliveryDelay())).append(",");

            csv.append(safe(delivery.getTrafficCondition())).append(",");

            csv.append(safe(delivery.getWeatherCondition())).append(",");

            csv.append(safe(delivery.getRouteTaken())).append(",");

            csv.append(safe(delivery.getRouteType())).append(",");

            csv.append(safe(delivery.getRouteEfficiency())).append(",");

            csv.append(safe(delivery.getSmallRoute())).append(",");

            csv.append(safe(delivery.getBikeFriendlyRoute())).append(",");

            csv.append(safe(delivery.getPredictedDeliveryMode())).append(",");

            csv.append(safe(delivery.getTrafficAvoidance())).append("\n");
        }

        return csv.toString();
    }


    // =========================
    // CSV VALUE SAFETY
    // =========================

    private String safe(Object value) {

        if (value == null) {
            return "";
        }

        String text = value.toString();

        text = text.replace("\"", "\"\"");

        return "\"" + text + "\"";
    }
}