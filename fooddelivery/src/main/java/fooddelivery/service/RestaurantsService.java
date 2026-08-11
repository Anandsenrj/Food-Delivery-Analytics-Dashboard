package fooddelivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.dto.RestaurantDTO;
import fooddelivery.repository.RestaurantsRepository;

@Service
public class RestaurantsService {

    @Autowired
    private RestaurantsRepository restaurantsRepository;

    public List<RestaurantDTO> getRestaurantPerformance() {
        return restaurantsRepository.getRestaurantPerformance();
    }
}