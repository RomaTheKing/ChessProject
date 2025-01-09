package com.example.backend.services.search;

import com.example.backend.database.entities.User;
import com.example.backend.services.game.GameManger;

import java.util.ArrayList;

public class SearchService {
    private ArrayList<SearchElement> list = new ArrayList<>();

    public ArrayList<SearchElement> getList(User user) {
        ArrayList<SearchElement> used = new ArrayList<>();
        for (SearchElement se : list)
            if (se.getUserId() != user.id) used.add(se);
        return used;
    }

    public boolean add(User user, int initTime, int deltaTime, int mode) {
        for (SearchElement se : list) {
            if (se.getUserId() == user.id) return false;
        }
        list.add(new SearchElement(user.id, user.name, user.rating, initTime, deltaTime, mode));
        return true;
    }

    public long join(User user, long searchElementId) {
        for (SearchElement se : list) {
            if (se.getId() == searchElementId) {
                System.out.println("Join");
                long gameId = GameManger.add(se.userId, user.id, se.initTime, se.deltaTime, se.mode);
                list.remove(se);
                return gameId;
            }
        }
        return -1;
    }
}
