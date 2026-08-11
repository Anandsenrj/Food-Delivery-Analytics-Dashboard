package fooddelivery.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "restaurants")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Restaurants {

    @Id
    @Column(name = "restaurant_id")
    private Integer restaurantId;

    @Column(name = "cuisine")
    private String cuisine;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "preparation_time")
    private Integer preparationTime;

}