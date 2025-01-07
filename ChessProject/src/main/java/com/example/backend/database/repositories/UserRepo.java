package com.example.backend.database.repositories;

import com.example.backend.database.entities.Message;
import com.example.backend.database.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findById(long id);

    boolean existsByEmail(String email);
}
