package com.example.backend.controllers;

import com.example.backend.database.entities.Message;
import com.example.backend.database.repositories.MessageRepo;
import com.example.backend.requests.AddMessageRequest;
import com.example.backend.responses.MessageResponces.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/api/mes")
public class MessageController {
    @Autowired
    private MessageRepo messageRepo;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody AddMessageRequest request) {
        if (request.getMessage() != null)
            messageRepo.save(new Message(request.getMessage()));
        System.out.println("Message add successful");
        System.out.println("Messages: ");
        for (Message mes : messageRepo.findAll())
            System.out.println(mes.getText());
        System.out.println("-------");

        return ResponseEntity.ok(new SuccessResponse());
    }

    @PostMapping("/deleteAll")
    public ResponseEntity<?> deleteAll() {
        System.out.print("Deleted messages: ");
        System.out.println(messageRepo.findAll().size());
        messageRepo.deleteAll();
        return ResponseEntity.ok(new SuccessResponse());
    }
}
