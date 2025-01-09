package com.example.backend.controllers;

import com.example.backend.auth.JwtUtils;
import com.example.backend.database.entities.User;
import com.example.backend.database.repositories.UserRepo;
import com.example.backend.requests.AuthRequest;
import com.example.backend.responses.JWTResponse;
import com.example.backend.responses.MessageResponces.SuccessResponse;
import com.example.backend.services.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    public UserRepo userRepo;

    private User getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userRepo.findByEmail(((UserDetails) auth.getPrincipal()).getEmail()).get();
    }

    @PostMapping("/pingAuth")
    public ResponseEntity<?> pingAuth() {
        User user = getUser();
//        userRepo.save(user);
        System.out.println(user.name);
        return ResponseEntity.ok(new SuccessResponse());
    }

    @PostMapping("/login")
    public ResponseEntity<?> authUser(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

//        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//        List<String> roles = userDetails.getAuthorities().stream()
//                .map(item -> item.getAuthority())
//                .collect(Collectors.toList());

        return ResponseEntity.ok(new JWTResponse(jwt));
    }
}
