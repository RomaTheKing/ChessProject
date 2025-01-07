package com.example.backend.database.entities;

public class Game {
    private static final int RATING_MODE = 0, UN_RATING_MODE = 1;

    public long id;
    public long playerWhite = -1, playerBlack = -1;
    public long timeWhite, timeBlack, deltaTime;
    public int mode = RATING_MODE;

    public Game() {

    }

    public Game(long playerWhite, long timeWhite, long timeBlack, long deltaTime, int mode) {
        this.playerWhite = playerWhite;
        this.timeWhite = timeWhite;
        this.timeBlack = timeBlack;
        this.deltaTime = deltaTime;
        this.mode = mode;
    }
}
