package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fooddelivery.dto.RestaurantDTO;
import fooddelivery.service.RestaurantsService;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = "http://localhost:5173")
public class RestaurantsController {

    @Autowired
    private RestaurantsService restaurantsService;

    @GetMapping
    public List<RestaurantDTO> getRestaurants() {
        return restaurantsService.getRestaurantPerformance();
    }
}