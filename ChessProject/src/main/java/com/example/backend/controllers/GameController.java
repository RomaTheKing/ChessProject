package com.example.backend.controllers;

import com.example.backend.database.entities.Game;
import com.example.backend.database.entities.User;
import com.example.backend.database.repositories.UserRepo;
import com.example.backend.requests.GameIdRequest;
import com.example.backend.requests.GameJoinRequest;
import com.example.backend.requests.GameMoveRequest;
import com.example.backend.requests.GameStateRequest;
import com.example.backend.responses.GameStateResponse;
import com.example.backend.responses.MessageResponces.BadResponse;
import com.example.backend.responses.MessageResponces.SuccessResponse;
import com.example.backend.services.game.GameManger;
import com.example.backend.services.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/api/game")
public class GameController {
    @Autowired
    public UserRepo userRepo;

    private User getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userRepo.findByEmail(((UserDetails) auth.getPrincipal()).getEmail()).get();
    }

    @PostMapping("/move")
    public ResponseEntity<?> move(@RequestBody GameMoveRequest request) {
//        System.out.println("/api/game/move");
        long gameId = request.getGameId();
        GameManger.move(getUser().id, gameId,
                request.sx, request.sy, request.fx, request.fy);
        return ResponseEntity.ok(new GameJoinRequest(gameId, 0));
    }

    @PostMapping("/getGameId")
    public ResponseEntity<?> getState(@RequestBody GameIdRequest request) {
//        System.out.println("/api/game/getState");
        long gameId = GameManger.getLastCreatedGameId(getUser());
        if (gameId == -1)
            return ResponseEntity.badRequest().body(new BadResponse("Game not started", 400));
        return ResponseEntity.ok(new GameJoinRequest(gameId, 0));
//        return ResponseEntity.badRequest().body(new BadResponse("User is waiting", 400));
    }

    @PostMapping("/getState")
    public ResponseEntity<?> getState(@RequestBody GameStateRequest request) {
//        System.out.println("/api/game/getState");
        GameStateResponse response = GameManger.getState(getUser(), request.getGameId());
        if (response == null)
            return ResponseEntity.badRequest().body(new BadResponse("Game not started", 400));
//        searchService.join(getUser(), request.gameID);
        return ResponseEntity.ok(response);
//        return ResponseEntity.badRequest().body(new BadResponse("User is waiting", 400));
    }
}
