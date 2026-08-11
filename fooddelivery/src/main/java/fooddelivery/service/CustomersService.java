package fooddelivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.entity.Customers;
import fooddelivery.repository.CustomersRepository;

@Service
public class CustomersService {

    @Autowired
    private CustomersRepository customersRepository;

    public List<Customers> getAllCustomers() {
        return customersRepository.findAll();
    }

    public long totalCustomers() {
        return customersRepository.count();
    }

}