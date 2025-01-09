package com.example.backend.controllers;

import com.example.backend.database.entities.User;
import com.example.backend.database.repositories.UserRepo;
import com.example.backend.requests.AddGameRequest;
import com.example.backend.requests.GameJoinRequest;
import com.example.backend.requests.SearchRequest;
import com.example.backend.responses.MessageResponces.BadResponse;
import com.example.backend.responses.MessageResponces.SuccessResponse;
import com.example.backend.responses.SearchResponse;
import com.example.backend.services.search.SearchService;
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
@RequestMapping(path="/api/search")
public class SearchController {
    @Autowired
    public UserRepo userRepo;
    public SearchService searchService = new SearchService();

    private User getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userRepo.findByEmail(((UserDetails) auth.getPrincipal()).getEmail()).get();
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody AddGameRequest request) {
        System.out.println("/api/search/add");
        if (searchService.add(getUser(), request.initTime,
                request.deltaTime, request.mode))
            return ResponseEntity.ok(new SuccessResponse());
        return ResponseEntity.badRequest().body(new BadResponse("User is waiting", 400));
    }

    @PostMapping("/get")
    public ResponseEntity<?> get(@RequestBody SearchRequest request) {
//        System.out.println("/api/search/get" + request.id);
        return ResponseEntity.ok(new SearchResponse(searchService.getList(getUser())));
//        return ResponseEntity.badRequest().body(new BadResponse("User is waiting", 400));
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody GameJoinRequest request) {
        searchService.join(getUser(), request.getGameId());
        return ResponseEntity.ok(new SuccessResponse());
    }
}
