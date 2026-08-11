package fooddelivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.dto.DashboardDTO;
import fooddelivery.repository.CustomersRepository;
import fooddelivery.repository.DeliveriesRepository;
import fooddelivery.repository.OrdersRepository;
import fooddelivery.repository.RestaurantsRepository;

@Service
public class DashboardService {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private CustomersRepository customersRepository;

    @Autowired
    private RestaurantsRepository restaurantsRepository;

    @Autowired
    private DeliveriesRepository deliveriesRepository;

    public DashboardDTO getDashboard() {

        return new DashboardDTO(

                ordersRepository.count(),

                ordersRepository.getTotalRevenue(),

                ordersRepository.getAverageOrderValue(),

                customersRepository.count(),

                restaurantsRepository.count(),

                deliveriesRepository.getAverageDelay()

        );

    }

}