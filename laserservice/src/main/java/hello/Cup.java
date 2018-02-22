package hello;

public class Cup {

    private String name;

    private String latitude;

    private String longitude;

    private boolean inCupboard = false;

    private void setPosition(String lat, String lon){
        latitude = lat;
        longitude = lon;
    }
    public Cup(String name, String lat, String lon){
        this.name = name;
        latitude = lat;
        longitude = lon;
    }

    public Cup(String name, String lat, String lon, boolean inCupboard){
        this.name = name;
        latitude = lat;
        longitude = lon;
        this.inCupboard = inCupboard;
    }

    public String getName() {
        return name;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public boolean isInCupboard() {
        return inCupboard;
    }

    public void setInCupboard(boolean inCupboard) {
        this.inCupboard = inCupboard;
    }
}
