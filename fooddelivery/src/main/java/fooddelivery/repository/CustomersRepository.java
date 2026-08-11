package fooddelivery.repository;

import fooddelivery.dto.CustomerDTO;
import fooddelivery.entity.Customers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomersRepository extends JpaRepository<Customers,String>{

    @Query("""
    SELECT new fooddelivery.dto.CustomerDTO(
        c.customerId,
        c.age,
        c.gender,
        c.location,
        c.orderHistory,
        c.customerRating,
        c.preferredCuisine,
        c.orderFrequency,
        c.loyaltyProgram
    )
    FROM Customers c
    """)
    List<CustomerDTO> getCustomers();

}