package fooddelivery.dto;

public class TopCustomerDTO {

    private String customerId;
    private Double totalSpent;

    public TopCustomerDTO(String customerId, Double totalSpent) {
        this.customerId = customerId;
        this.totalSpent = totalSpent;
    }

    public String getCustomerId() {
        return customerId;
    }

    public Double getTotalSpent() {
        return totalSpent;
    }
}