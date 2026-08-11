package fooddelivery.dto;

public class TopRestaurantDTO {

    private Integer restaurantId;
    private Double revenue;

    public TopRestaurantDTO(Integer restaurantId, Double revenue) {
        this.restaurantId = restaurantId;
        this.revenue = revenue;
    }

    public Integer getRestaurantId() {
        return restaurantId;
    }

    public Double getRevenue() {
        return revenue;
    }
}