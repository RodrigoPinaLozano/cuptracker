package hello;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@SpringBootApplication
@RestController
public class Application {

    private List<CupboardInfo> cupboards = new ArrayList<CupboardInfo>() {{
        add(new CupboardInfo(20, "Küche EG"));
        add(new CupboardInfo(58, "Küche 1. OG"));
        add(new CupboardInfo(58, "Küche 2. OG"));
    }};

    @RequestMapping("/")
    @CrossOrigin
    public List<CupboardInfo> home() {
        String distanceStr;
        cupboards.get(0).setCurrentDistance(comInfo.getCurrentWidth());
        cupboards.get(1).setCurrentDistance((int) (Math.random() * 56) + 2);
        cupboards.get(2).setCurrentDistance((int) (Math.random() * 56) + 2);

        return cupboards;
    }

    private List<Room> rooms = new ArrayList<Room>() {{
        Room room1 = new Room("Jeff's Office");
        room1.addCup(new Cup("Jeff's Cup", "52.49821731436504", "13.374527982054815"));
        add(room1);
        Room room2 = new Room("Dave's Office");
        room2.addCup(new Cup("Dave's Cup", "52.49830059175778", "13.374648681460485"));
        room2.addCup(new Cup("Alices's Cup", "52.49834467972538", "13.374527982054815"));
        add(room2);
        Room room3 = new Room("Alice's ofice");
        add(room3);
        Room room4 = new Room("Bob's office");
        room4.addCup(new Cup("Bob's Cup", "52.49815853022814", "13.375171712218389"));
        room4.addCup(new Cup("Guestcup1", "52.4982254788223", "13.37526022511588"));
        room4.addCup(new Cup("Guestcup2", "52.49829569309199", "13.375185123263464"));
        add(room4);
        Room room5 = new Room("Küche EG");
        room5.addCup(new Cup("Smart Cup", "52.49831365486391", "13.37491958457099"));
        add(room5);

    }};

    @RequestMapping("/rooms")
    @CrossOrigin
    public List<Room> rooms() {
        int currentWidth = comInfo.getCurrentWidth();
        if (currentWidth == 20) {
            rooms.get(4).getCups().get(0).setInCupboard(false);

        } else {
            rooms.get(4).getCups().get(0).setInCupboard(true);
        }
        return rooms;
    }

    @RequestMapping("/cups")
    @CrossOrigin
    public List<Cup> cups() {
        List<Cup> cups = new ArrayList<>();
        for (Room room : rooms) {
            for (Cup cup : room.getCups()) {
                cups.add(cup);
            }
        }
        return cups;
    }

    private static ComInfo comInfo;

    private static Thread t1;

    public static void main(String[] args) {
        comInfo = new ComInfo();
        t1 = new Thread(comInfo);
        t1.start();
        SpringApplication.run(Application.class, args);
    }

}
