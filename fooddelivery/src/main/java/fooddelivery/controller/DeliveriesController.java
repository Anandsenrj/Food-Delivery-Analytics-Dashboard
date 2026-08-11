package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fooddelivery.entity.Deliveries;
import fooddelivery.service.DeliveriesService;

@RestController
@RequestMapping("/api/deliveries")
@CrossOrigin(origins = "http://localhost:5173")
public class DeliveriesController {

    @Autowired
    private DeliveriesService deliveriesService;

    @GetMapping
    public List<Deliveries> getDeliveries() {
        return deliveriesService.getAllDeliveries();
    }

    @GetMapping("/count")
    public long getCount() {
        return deliveriesService.getTotalDeliveries();
    }

    @GetMapping("/average-delay")
    public Double averageDelay() {
        return deliveriesService.getAverageDelay();
    }
}