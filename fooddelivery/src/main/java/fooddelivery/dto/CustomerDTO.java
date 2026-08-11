package fooddelivery.dto;

public record CustomerDTO(

        String customerId,
        Integer age,
        String gender,
        String location,
        Integer orderHistory,
        Double customerRating,
        String preferredCuisine,
        String orderFrequency,
        String loyaltyProgram

) {}