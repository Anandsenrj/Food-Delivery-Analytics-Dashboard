package fooddelivery.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Orders {

    @Id
    @Column(name = "order_id")
    private String orderId;

    @Column(name = "customer_id")
    private String customerId;

    @Column(name = "restaurant_id")
    private Integer restaurantId;

    @Column(name = "food_item_id")
    private Integer foodItemId;

    @Column(name = "order_time")
    private LocalDateTime orderTime;

    @Column(name = "order_value")
    private Double orderValue;

    @Column(name = "delivery_method")
    private String deliveryMethod;

    @Column(name = "customer_satisfaction")
    private Integer customerSatisfaction;
}