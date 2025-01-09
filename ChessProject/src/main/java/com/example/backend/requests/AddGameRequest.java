package com.example.backend.requests;

public class AddGameRequest {
//    public int minUserRate, maxUserRate;
    public int initTime, deltaTime;
    public int mode;

    public AddGameRequest(int initTime, int deltaTime, int mode) {
        this.initTime = initTime;
        this.deltaTime = deltaTime;
        this.mode = mode;
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
}
