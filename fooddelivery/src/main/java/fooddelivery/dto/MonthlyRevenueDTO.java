package fooddelivery.dto;

public class MonthlyRevenueDTO {

    private Integer month;
    private Double revenue;

    public MonthlyRevenueDTO(Integer month, Double revenue) {
        this.month = month;
        this.revenue = revenue;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Double getRevenue() {
        return revenue;
    }

    public void setRevenue(Double revenue) {
        this.revenue = revenue;
    }
}