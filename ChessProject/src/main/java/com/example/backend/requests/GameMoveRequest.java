package com.example.backend.requests;

public class GameMoveRequest {
    public int sx, sy, fx, fy;
    public long gameId;

    public GameMoveRequest(int sx, int sy, int fx, int fy, long gameId) {
        this.sx = sx;
        this.sy = sy;
        this.fx = fx;
        this.fy = fy;
        this.gameId = gameId;
    }

    public int getSx() {
        return sx;
    }

    public void setSx(int sx) {
        this.sx = sx;
    }

    public int getSy() {
        return sy;
    }

    public void setSy(int sy) {
        this.sy = sy;
    }

    public int getFx() {
        return fx;
    }

    public void setFx(int fx) {
        this.fx = fx;
    }

    public int getFy() {
        return fy;
    }

    public void setFy(int fy) {
        this.fy = fy;
    }

    public long getGameId() {
        return gameId;
    }

    public void setGameId(long gameId) {
        this.gameId = gameId;
    }
}
