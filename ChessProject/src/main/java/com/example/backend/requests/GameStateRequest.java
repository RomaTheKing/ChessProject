package com.example.backend.requests;

public class GameStateRequest {
    public long gameId, id;

    public GameStateRequest(long gameId, long id) {
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
