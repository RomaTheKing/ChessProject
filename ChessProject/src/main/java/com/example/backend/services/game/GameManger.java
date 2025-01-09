package com.example.backend.services.game;

import com.example.backend.database.entities.User;
import com.example.backend.responses.GameStateResponse;

import java.awt.*;
import java.util.ArrayList;
import java.util.HashMap;

public class GameManger {
    private static HashMap<Long, Game> games = new HashMap<>();
    private static HashMap<Long, Long> lastCreatedGames = new HashMap<>();

    public static long getLastCreatedGameId(User user) {
        if (!lastCreatedGames.containsKey(user.id)) return -1;
        return lastCreatedGames.get(user.id);
    }

    public static long add(long playerId1, long playerId2, int initTime, int deltaTime, int mode) {
        Game game = new Game(playerId1, playerId2, initTime, deltaTime, mode);

        lastCreatedGames.put(playerId1, game.getId());
        lastCreatedGames.put(playerId2, game.getId());
        games.put(game.getId(), game);
        return game.id;
    }

    public static void move(long playerId, long gameId, int sx, int sy, int fx, int fy) {
        Game game = games.get(gameId);
        if (game.getTurn() != playerId) return;
        System.out.println(game.isActive());
        if (game.isActive() == 2) {
            System.out.println(game.timeWhite + " " + game.timeBlack);
            System.out.println(game.deltaTime * 1000);
            if (playerId == game.playerWhite)
                game.timeWhite += game.deltaTime * 1000;
            else game.timeBlack += game.deltaTime * 1000;
            System.out.println("++++");
            System.out.println(game.timeWhite + " " + game.timeBlack);
            System.out.println(game.deltaTime * 1000);
        }
        game.turn = game.getPlayerWhite() ^ game.getPlayerBlack() ^ playerId;
        game.map[fy - 1][fx - 1] = game.map[sy - 1][sx - 1];
        game.map[sy - 1][sx - 1] = "";

        if (game.isActive() != 2) game.start();
    }

    public static GameStateResponse getState(User user, long gameId) {
        if (!games.containsKey(gameId)) return null;
        Game game = games.get(gameId);
        lastCreatedGames.remove(user.id);
        return new GameStateResponse(user.id == game.getPlayerWhite() ? 1 : 0, game.getMap(),
                game.getTimeWhite(), game.getTimeBlack());
    }
}
