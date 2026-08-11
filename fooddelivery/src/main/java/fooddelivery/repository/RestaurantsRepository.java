package fooddelivery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fooddelivery.dto.RestaurantDTO;
import fooddelivery.entity.Restaurants;

@Repository
public interface RestaurantsRepository extends JpaRepository<Restaurants, Integer> {

    @Query("""
        SELECT new fooddelivery.dto.RestaurantDTO(
            o.restaurantId,
            COUNT(o),
            COALESCE(SUM(o.orderValue), 0.0)
        )
        FROM Orders o
        GROUP BY o.restaurantId
        ORDER BY COALESCE(SUM(o.orderValue), 0.0) DESC
    """)
    List<RestaurantDTO> getRestaurantPerformance();

}