package fooddelivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.dto.DeliveryMethodDTO;
import fooddelivery.dto.MonthlyOrdersDTO;
import fooddelivery.dto.MonthlyRevenueDTO;
import fooddelivery.dto.RecentOrderDTO;
import fooddelivery.dto.TopCustomerDTO;
import fooddelivery.dto.TopRestaurantDTO;
import fooddelivery.repository.OrdersRepository;

@Service
public class AnalyticsService {

    @Autowired
    private OrdersRepository ordersRepository;

    public List<MonthlyRevenueDTO> getMonthlyRevenue() {
        return ordersRepository.getMonthlyRevenue();
    }

    public List<DeliveryMethodDTO> getDeliveryMethodStats() {
        return ordersRepository.getDeliveryMethodStats();
    }

    public List<TopRestaurantDTO> getTopRestaurants() {
        return ordersRepository.getTopRestaurants();
    }

    public List<TopCustomerDTO> getTopCustomers() {
        return ordersRepository.getTopCustomers();
    }

    public List<RecentOrderDTO> getRecentOrders() {
        return ordersRepository.getRecentOrders();
    }

    public List<MonthlyOrdersDTO> getMonthlyOrders() {
        return ordersRepository.getMonthlyOrders();
    }

}