package com.example.backend.database.repositories;

import com.example.backend.database.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MessageRepo extends JpaRepository<Message, Integer> {
    Optional<Message> findById(long id);
}
