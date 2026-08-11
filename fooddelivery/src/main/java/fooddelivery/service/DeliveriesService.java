package fooddelivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.entity.Deliveries;
import fooddelivery.repository.DeliveriesRepository;

@Service
public class DeliveriesService {

    @Autowired
    private DeliveriesRepository deliveriesRepository;

    public List<Deliveries> getAllDeliveries() {
        return deliveriesRepository.findAll();
    }

    public long getTotalDeliveries() {
        return deliveriesRepository.count();
    }

    public Double getAverageDelay() {
        return deliveriesRepository.getAverageDelay();
    }
}