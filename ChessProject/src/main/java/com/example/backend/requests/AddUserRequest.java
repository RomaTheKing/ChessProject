package com.example.backend.requests;

public class AddUserRequest {
    private String userName;
    private String email, password;

    public AddUserRequest(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
//        System.out.println(userName + " " + email + " " + password);
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}