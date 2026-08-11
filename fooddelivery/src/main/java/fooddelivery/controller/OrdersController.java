package fooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fooddelivery.entity.Orders;
import fooddelivery.service.OrdersService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @GetMapping
    public List<Orders> getOrders() {
        return ordersService.getAllOrders();
    }

}