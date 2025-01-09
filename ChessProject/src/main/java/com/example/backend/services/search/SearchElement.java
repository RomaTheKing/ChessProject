package com.example.backend.services.search;

public class SearchElement {
    private static long idCounter = 0;
    public long id, userId;
    public String name;
    public int initTime, deltaTime;
    public int mode, rating;

    public SearchElement(long userId, String name, int rating, int initTime, int deltaTime, int mode) {
        this.userId = userId;
        this.initTime = initTime;
        this.deltaTime = deltaTime;
        this.mode = mode;
        this.name = name;
        this.rating = rating;
        this.id = idCounter++;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public int getInitTime() {
        return initTime;
    }

    public void setInitTime(int initTime) {
        this.initTime = initTime;
    }

    public int getDeltaTime() {
        return deltaTime;
    }

    public void setDeltaTime(int deltaTime) {
        this.deltaTime = deltaTime;
    }

    public int getMode() {
        return mode;
    }

    public void setMode(int mode) {
        this.mode = mode;
    }

    public long getId() {
        return id;
    }
}
