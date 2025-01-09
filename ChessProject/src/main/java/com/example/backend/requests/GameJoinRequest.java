package com.example.backend.requests;

public class GameJoinRequest {
    public long gameId, id = 0;

    public GameJoinRequest(long gameId, long id) {
        this.gameId = gameId;
        this.id = id;
    }

    public long getGameId() {
        return gameId;
    }

    public void setGameId(long gameId) {
        this.gameId = gameId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
