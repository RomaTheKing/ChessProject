package com.example.backend.responses;

public class GameJoinResponse {
    public long gameId, id;

    public GameJoinResponse(long gameId, long id) {
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
