package fooddelivery.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customers {

    @Id
    @Column(name = "customer_id")
    private String customerId;

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "location")
    private String location;

    @Column(name = "order_history")
    private Integer orderHistory;

    @Column(name = "customer_rating")
    private Double customerRating;

    @Column(name = "preferred_cuisine")
    private String preferredCuisine;

    @Column(name = "order_frequency")
    private String orderFrequency;

    @Column(name = "loyalty_program")
    private String loyaltyProgram;
}