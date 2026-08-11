package fooddelivery.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "deliveries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Deliveries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private Integer deliveryId;

    @Column(name = "order_id")
    private String orderId;

    @Column(name = "delivery_distance")
    private Double deliveryDistance;

    @Column(name = "delivery_time_actual")
    private Double deliveryTimeActual;

    @Column(name = "delivery_delay")
    private Double deliveryDelay;

    @Column(name = "traffic_condition")
    private String trafficCondition;

    @Column(name = "weather_condition")
    private String weatherCondition;

    @Column(name = "route_taken")
    private String routeTaken;

    @Column(name = "route_type")
    private String routeType;

    @Column(name = "route_efficiency")
    private Double routeEfficiency;

    @Column(name = "small_route")
    private Boolean smallRoute;

    @Column(name = "bike_friendly_route")
    private Boolean bikeFriendlyRoute;

    @Column(name = "predicted_delivery_mode")
    private String predictedDeliveryMode;

    @Column(name = "traffic_avoidance")
    private String trafficAvoidance;
}