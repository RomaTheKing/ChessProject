package com.example.backend.responses.MessageResponces;

public class SuccessResponse extends MessageResponse {
    private static final String SUCCESS_STATUS = "Success";
    private static final int SUCCESS_CODE = 300;

    public SuccessResponse() {
        super(SUCCESS_STATUS, SUCCESS_CODE);
    }
}