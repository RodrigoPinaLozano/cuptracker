package hello;

public class CupboardInfo {
    private int currentDistanceInCm;

    private int cupboardInnerWidthInCm = 58;

    private String roomName;

    private boolean areCupsInCupboard;

    public int getCurrentDistanceInCm() {
        return currentDistanceInCm;
    }

    public void setCurrentDistance(int currentDistanceInCm) {
        this.currentDistanceInCm = currentDistanceInCm;
    }

    public CupboardInfo(int cupboardInnerWidthInCm, String roomName) {
        this.cupboardInnerWidthInCm = cupboardInnerWidthInCm;
        this.roomName = roomName;
    }

    public int getCupboardInnerWidthInCm() {
        return cupboardInnerWidthInCm;
    }

    public String getRoomName() {
        return roomName;
    }

    public boolean isAreCupsInCupboard() {
        return currentDistanceInCm != cupboardInnerWidthInCm;
    }
}
