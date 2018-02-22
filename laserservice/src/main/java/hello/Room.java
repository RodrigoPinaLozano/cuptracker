package hello;

import java.util.ArrayList;
import java.util.List;

public class Room {

    private String name;

    private List<Cup> cups = new ArrayList<>();

    public Room(String name) {
        this.name = name;
    }

    public List<Cup> getCups() {
        return cups;
    }

    public String getName() {
        return name;
    }

    public void addCup(Cup cup){
        cups.add(cup);
    }

    public void empty() {
        this.cups = new ArrayList<>();
    }
}
