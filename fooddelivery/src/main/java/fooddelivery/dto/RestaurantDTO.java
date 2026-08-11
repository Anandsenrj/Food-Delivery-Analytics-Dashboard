package fooddelivery.dto;

public record RestaurantDTO(

        Integer restaurantId,
        Long totalOrders,
        Double revenue

) {}