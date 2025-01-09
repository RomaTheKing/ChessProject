package com.example.backend.services.game;

public class Game {
    private static final int RATING_MODE = 0, UN_RATING_MODE = 1;
    private static final int WHITE = 0, BLACK = 1;

    private static long counter = 0;
    public long id;
    public long playerWhite = -1, playerBlack = -1;
    public int timeWhite, timeBlack, deltaTime;
    public int mode = RATING_MODE;
    public long turn, lastTime;
    private int isActive = 0;
    String[][] map = new String[8][8];

    public Game(long playerID1, long playerID2, int time, int deltaTime, int mode) {
//        if (Math.random() > 0.5) playerBlack = player;
//        else playerWhite = player;

        playerBlack = playerID1;
        playerWhite = playerID2;

        this.timeWhite = this.timeBlack = time * 1000;
        this.deltaTime = deltaTime;
        this.mode = mode;
        this.id = counter++;
        this.turn = playerWhite;

        for (int i = 0; i < map.length; i++)
            for (int j = 0; j < map[i].length; j++)
                map[i][j] = getStartUnit(j + 1, i + 1);
    }

    void start() {
        if (isActive == 1) {
            lastTime = System.currentTimeMillis();
            new MyThread().start();
        }
        isActive++;
    }

    void move(long playerID) {
        if (turn == BLACK && playerID == WHITE ||
                turn == WHITE && playerID == BLACK) return;
    }

    public long getId() {
        return id;
    }

    public long getPlayerWhite() {
        return playerWhite;
    }

    public long getPlayerBlack() {
        return playerBlack;
    }

    public int getTimeWhite() {
        return timeWhite;
    }

    public int getTimeBlack() {
        return timeBlack;
    }

    public int getDeltaTime() {
        return deltaTime;
    }

    public int getMode() {
        return mode;
    }

    public long getTurn() {
        return turn;
    }

    public String[][] getMap() {
        return map;
    }

    private static String getStartUnit(int x, int y) {
        if (y == 2) return "pawn_w";
        if (y == 7) return "pawn_b";

        if (y < 7 && y > 2) return "";

        String color = "_b";
        if (y == 1) color = "_w";
        if (x == 1 || x == 8) return "rook" + color;
        if (x == 2 || x == 7) return "knight" + color;
        if (x == 3 || x == 6) return "bishop" + color;
        if (x == 4) return "queen" + color;
        if (x == 5) return "king" + color;
        return "";
    }

    public int isActive() {
        return isActive;
    }

    private class MyThread extends Thread {
        @Override
        public void run() {
            while (timeWhite > 0 && timeBlack > 0) {
                long dt = System.currentTimeMillis() - lastTime;
                lastTime = System.currentTimeMillis();
                if (turn == playerWhite) timeWhite -= dt;
                if (turn == playerBlack) timeBlack -= dt;
            }
        }
    }
}
