package com.example.backend.controllers;

import com.example.backend.database.entities.User;
import com.example.backend.database.repositories.UserRepo;
import com.example.backend.requests.AddUserRequest;
import com.example.backend.responses.MessageResponces.BadResponse;
import com.example.backend.responses.MessageResponces.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/api/reg")
public class RegController {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    PasswordEncoder passwordEncoder = NoOpPasswordEncoder.getInstance();

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody AddUserRequest request) {
//        userRepo.deleteAll();
        if (userRepo.existsByEmail(request.getEmail())) {
            System.out.println("User exists");
            return ResponseEntity.badRequest().body(new BadResponse("Email exists", 400));
        }

//        Set<Role> roles = new HashSet<>();
//        if (request.getKey().equals(ADMIN_KEY)) {
//            Role adminRole = roleRepo
//                    .findByName(ERole.ROLE_ADMIN)
//                    .orElseThrow(() -> new RuntimeException("Error, Role ADMIN is not found"));
//            roles.add(adminRole);
//        }
        /*
            User1 user1@gmail.com 123
         */
        userRepo.save(new User(request.getUserName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                User.INIT_RATING));
        System.out.println("Add User" + request.getUserName() + " " + request.getEmail() + " " + passwordEncoder.encode(request.getPassword()));
        return ResponseEntity.ok(new SuccessResponse());
    }
}
