package fooddelivery.dto;

public class DeliveryMethodDTO {

    private String method;
    private Long count;

    public DeliveryMethodDTO(String method, Long count) {
        this.method = method;
        this.count = count;
    }

    public String getMethod() {
        return method;
    }

    public Long getCount() {
        return count;
    }
}