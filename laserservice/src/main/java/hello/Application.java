package hello;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
    public List<CupboardInfo> home() {
        String distanceStr;
        cupboards.get(0).setCurrentDistance(comInfo.getCurrentWidth());
        cupboards.get(1).setCurrentDistance((int) (Math.random() * 56) + 2);
        cupboards.get(2).setCurrentDistance((int) (Math.random() * 56) + 2);

        return cupboards;
    }

    private static ComInfo comInfo;
    private static Thread t1;

    public static void main(String[] args) {
        comInfo =new ComInfo();
        t1 = new Thread(comInfo);
        t1.start();
        SpringApplication.run(Application.class, args);
    }

}
