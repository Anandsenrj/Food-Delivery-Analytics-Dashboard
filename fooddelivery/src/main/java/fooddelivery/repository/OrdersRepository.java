package fooddelivery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fooddelivery.dto.DeliveryMethodDTO;
import fooddelivery.dto.MonthlyOrdersDTO;
import fooddelivery.dto.MonthlyRevenueDTO;
import fooddelivery.dto.RecentOrderDTO;
import fooddelivery.dto.TopCustomerDTO;
import fooddelivery.dto.TopRestaurantDTO;
import fooddelivery.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, String> {

    // ================= Dashboard =================

    @Query("""
            SELECT SUM(o.orderValue)
            FROM Orders o
            """)
    Double getTotalRevenue();

    @Query("""
            SELECT AVG(o.orderValue)
            FROM Orders o
            """)
    Double getAverageOrderValue();

    // ================= Monthly Revenue =================

    @Query("""
            SELECT new fooddelivery.dto.MonthlyRevenueDTO(
                MONTH(o.orderTime),
                SUM(o.orderValue)
            )
            FROM Orders o
            GROUP BY MONTH(o.orderTime)
            ORDER BY MONTH(o.orderTime)
            """)
    List<MonthlyRevenueDTO> getMonthlyRevenue();

    // ================= Delivery Methods =================

    @Query("""
            SELECT new fooddelivery.dto.DeliveryMethodDTO(
                o.deliveryMethod,
                COUNT(o)
            )
            FROM Orders o
            GROUP BY o.deliveryMethod
            ORDER BY COUNT(o) DESC
            """)
    List<DeliveryMethodDTO> getDeliveryMethodStats();

    // ================= Top Restaurants =================

    @Query("""
            SELECT new fooddelivery.dto.TopRestaurantDTO(
                o.restaurantId,
                SUM(o.orderValue)
            )
            FROM Orders o
            GROUP BY o.restaurantId
            ORDER BY SUM(o.orderValue) DESC
            """)
    List<TopRestaurantDTO> getTopRestaurants();

    // ================= Top Customers =================

    @Query("""
            SELECT new fooddelivery.dto.TopCustomerDTO(
                o.customerId,
                SUM(o.orderValue)
            )
            FROM Orders o
            GROUP BY o.customerId
            ORDER BY SUM(o.orderValue) DESC
            """)
    List<TopCustomerDTO> getTopCustomers();

    // ================= Recent Orders =================

    @Query("""
            SELECT new fooddelivery.dto.RecentOrderDTO(
                o.orderId,
                o.customerId,
                o.restaurantId,
                o.orderValue,
                o.deliveryMethod,
                o.orderTime
            )
            FROM Orders o
            ORDER BY o.orderTime DESC
            """)
    List<RecentOrderDTO> getRecentOrders();

    // ================= Monthly Orders =================

    @Query("""
            SELECT new fooddelivery.dto.MonthlyOrdersDTO(
                MONTH(o.orderTime),
                COUNT(o)
            )
            FROM Orders o
            GROUP BY MONTH(o.orderTime)
            ORDER BY MONTH(o.orderTime)
            """)
    List<MonthlyOrdersDTO> getMonthlyOrders();

}