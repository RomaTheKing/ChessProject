package com.example.backend.responses.MessageResponces;

public class BadResponse extends MessageResponse {
    public static final String BAD_REQUEST_MESSAGE = "All are hard!!!";
    public static final int BAD_REQUEST_CODE = 400;;

    public BadResponse(String message, int code) {
        super(message, code);
    }

//    public BadResponse() {
//        super(BAD_REQUEST_MESSAGE, BAD_REQUEST_CODE);
//    }
}
