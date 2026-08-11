package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fooddelivery.dto.DeliveryMethodDTO;
import fooddelivery.dto.MonthlyOrdersDTO;
import fooddelivery.dto.MonthlyRevenueDTO;
import fooddelivery.dto.RecentOrderDTO;
import fooddelivery.dto.TopCustomerDTO;
import fooddelivery.dto.TopRestaurantDTO;
import fooddelivery.service.AnalyticsService;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/monthly-revenue")
    public List<MonthlyRevenueDTO> monthlyRevenue() {
        return analyticsService.getMonthlyRevenue();
    }

    @GetMapping("/delivery-methods")
    public List<DeliveryMethodDTO> deliveryMethods() {
        return analyticsService.getDeliveryMethodStats();
    }

    @GetMapping("/top-restaurants")
    public List<TopRestaurantDTO> topRestaurants() {
        return analyticsService.getTopRestaurants();
    }

    @GetMapping("/top-customers")
    public List<TopCustomerDTO> topCustomers() {
        return analyticsService.getTopCustomers();
    }

    @GetMapping("/recent-orders")
    public List<RecentOrderDTO> recentOrders() {
        return analyticsService.getRecentOrders();
    }

    @GetMapping("/monthly-orders")
    public List<MonthlyOrdersDTO> monthlyOrders() {
        return analyticsService.getMonthlyOrders();
    }

}