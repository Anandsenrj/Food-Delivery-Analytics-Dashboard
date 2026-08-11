package fooddelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fooddelivery.entity.Deliveries;

@Repository
public interface DeliveriesRepository extends JpaRepository<Deliveries, Integer> {

    @Query("""
        SELECT AVG(d.deliveryDelay)
        FROM Deliveries d
    """)
    Double getAverageDelay();

}