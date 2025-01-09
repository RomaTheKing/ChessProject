package com.example.backend.responses;

import com.example.backend.services.search.SearchElement;

import java.util.ArrayList;

public class SearchResponse {
    public ArrayList<SearchElement> list;
    public int id = 0;

    public SearchResponse(ArrayList<SearchElement> list) {
        this.list = list;
    }

    public ArrayList<SearchElement> getList() {
        return list;
    }

    public void setList(ArrayList<SearchElement> list) {
        this.list = list;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
