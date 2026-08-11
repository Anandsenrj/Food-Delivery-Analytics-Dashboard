package fooddelivery.dto;

public class MonthlyOrdersDTO {

    private Integer month;
    private Long orders;

    public MonthlyOrdersDTO(Integer month, Long orders) {
        this.month = month;
        this.orders = orders;
    }

    public Integer getMonth() {
        return month;
    }

    public Long getOrders() {
        return orders;
    }

}