package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fooddelivery.entity.Customers;
import fooddelivery.service.CustomersService;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomersController {

    @Autowired
    private CustomersService customersService;

    @GetMapping
    public List<Customers> getCustomers() {
        return customersService.getAllCustomers();
    }

    @GetMapping("/count")
    public long countCustomers() {
        return customersService.totalCustomers();
    }
}