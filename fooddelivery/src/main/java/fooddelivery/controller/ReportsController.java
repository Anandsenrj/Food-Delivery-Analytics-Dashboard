package fooddelivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fooddelivery.service.ReportsService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportsController {

    @Autowired
    private ReportsService reportsService;


    @GetMapping("/orders")
    public ResponseEntity<String> downloadOrders() {

        String csv = reportsService.generateOrdersCSV();

        return ResponseEntity.ok()
                .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=orders.csv"
                )
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csv);
    }


    @GetMapping("/customers")
    public ResponseEntity<String> downloadCustomers() {

        String csv = reportsService.generateCustomersCSV();

        return ResponseEntity.ok()
                .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=customers.csv"
                )
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csv);
    }


    @GetMapping("/deliveries")
    public ResponseEntity<String> downloadDeliveries() {

        String csv = reportsService.generateDeliveriesCSV();

        return ResponseEntity.ok()
                .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=deliveries.csv"
                )
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csv);
    }
}