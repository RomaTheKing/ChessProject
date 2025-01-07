package com.example.backend.services.game;

public class Game {
    private static final int RATING_MODE = 0, UN_RATING_MODE = 1;

    public long id;
    public long playerWhite = -1, playerBlack = -1;
    public long timeWhite, timeBlack, deltaTime;
    public int mode = RATING_MODE;

    public Game(long player, long time, long deltaTime, int mode) {
        if (Math.random() > 0.5) playerBlack = player;
        else playerWhite = player;

        this.timeWhite = this.timeBlack = time * 1000;
        this.deltaTime = deltaTime;
        this.mode = mode;
    }
}
