package com.example.backend.responses;

public class GameStateResponse {
    public int color;
    public String[][] map;
    public int whiteTime, blackTime;

    public GameStateResponse(int color, String[][] map, int whiteTime, int blackTime) {
        this.color = color;
        this.map = map;
        this.whiteTime = whiteTime / 1000;
        this.blackTime = blackTime / 1000;
    }

    public int getColor() {
        return color;
    }

    public void setColor(int color) {
        this.color = color;
    }

    public String[][] getMap() {
        return map;
    }

    public void setMap(String[][] map) {
        this.map = map;
    }

    public int getWhiteTime() {
        return whiteTime;
    }

    public void setWhiteTime(int whiteTime) {
        this.whiteTime = whiteTime;
    }

    public int getBlackTime() {
        return blackTime;
    }

    public void setBlackTime(int blackTime) {
        this.blackTime = blackTime;
    }
}
