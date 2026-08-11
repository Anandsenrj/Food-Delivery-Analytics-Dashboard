package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fooddelivery.dto.DeliveryMethodDTO;
import fooddelivery.dto.MonthlyRevenueDTO;
import fooddelivery.dto.TopRestaurantDTO;
import fooddelivery.repository.OrdersRepository;
import fooddelivery.dto.TopCustomerDTO;
import fooddelivery.dto.RecentOrderDTO;

@RestController
@RequestMapping("/api/revenue")
@CrossOrigin(origins = "http://localhost:5173")
public class RevenueController {

    @Autowired
    private OrdersRepository ordersRepository;

    @GetMapping("/monthly")
    public List<MonthlyRevenueDTO> monthlyRevenue() {
        return ordersRepository.getMonthlyRevenue();
    }

    @GetMapping("/delivery-methods")
    public List<DeliveryMethodDTO> deliveryMethods() {
        return ordersRepository.getDeliveryMethodStats();
    }

    @GetMapping("/top-restaurants")
    public List<TopRestaurantDTO> topRestaurants() {
        return ordersRepository.getTopRestaurants();
    }

    @GetMapping("/top-customers")
    public List<TopCustomerDTO> topCustomers() {
        return ordersRepository.getTopCustomers();
}

@GetMapping("/recent-orders")
public List<RecentOrderDTO> recentOrders() {
    return ordersRepository.getRecentOrders();
}
}