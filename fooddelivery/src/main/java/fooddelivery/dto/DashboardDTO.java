package fooddelivery.dto;

public record DashboardDTO(

        Long totalOrders,
        Double totalRevenue,
        Double averageOrder,
        Long totalCustomers,
        Long totalRestaurants,
        Double averageDelay

) {}