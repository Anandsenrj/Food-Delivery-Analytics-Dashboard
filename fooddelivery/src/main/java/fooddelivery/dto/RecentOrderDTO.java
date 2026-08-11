package fooddelivery.dto;

import java.time.LocalDateTime;

public class RecentOrderDTO {

    private String orderId;
    private String customerId;
    private Integer restaurantId;
    private Double orderValue;
    private String deliveryMethod;
    private LocalDateTime orderTime;

    public RecentOrderDTO(
            String orderId,
            String customerId,
            Integer restaurantId,
            Double orderValue,
            String deliveryMethod,
            LocalDateTime orderTime) {

        this.orderId = orderId;
        this.customerId = customerId;
        this.restaurantId = restaurantId;
        this.orderValue = orderValue;
        this.deliveryMethod = deliveryMethod;
        this.orderTime = orderTime;
    }

    public String getOrderId() {
        return orderId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public Integer getRestaurantId() {
        return restaurantId;
    }

    public Double getOrderValue() {
        return orderValue;
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }
}