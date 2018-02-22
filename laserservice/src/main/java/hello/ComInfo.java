package hello;

import com.fazecast.jSerialComm.SerialPort;

import java.io.InputStream;

public class ComInfo implements Runnable {

    private int currentWidth;

    @Override
    public void run() {
        SerialPort commPort = SerialPort.getCommPort("/dev/cu.usbmodem14421");
        commPort.openPort();
        InputStream in = commPort.getInputStream();
        while (true){
            String result = "";
            try {
                if (in != null) {
                    char c = (char) in.read();
                    while (c != '\n') {
                        c = (char) in.read();
                    }
                    c = (char) in.read();
                    do {
                        result = result + c;
                        c = (char) in.read();
                    } while (c != '\r');
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
            currentWidth = Integer.valueOf(result.trim());
        }
    }

    public int getCurrentWidth() {
        return currentWidth;
    }

}
