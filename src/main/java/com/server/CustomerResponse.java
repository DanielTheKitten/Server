package com.server;

public class CustomerResponse {

    private final String status;
    private final Integer code;

    public CustomerResponse(String status, Integer code) {
        this.status = status;
        this.code = code;
    }

    public String getStatus() {
        return status;
    }

    public Integer getCode() {
        return code;
    }
}