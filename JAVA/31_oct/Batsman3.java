class Batsman1 {
    private String name;
    private int runsScored;
    private int centuries;
    private int halfCenturies;
    private int ballsFaced;
    private int fours;
    private int sixes;
    private int id;

    private static int idGenerator = 1000;

    // Default constructor
    public Batsman1() {
        this.id = ++idGenerator;
    }

    // Parameterized constructor
    public Batsman1(String name, int runsScored, int centuries, int halfCenturies, int ballsFaced, int fours, int sixes) {
        this.id = ++idGenerator;
        this.name = name;
        this.runsScored = runsScored;
        this.centuries = centuries;
        this.halfCenturies = halfCenturies;
        this.ballsFaced = ballsFaced;
        this.fours = fours;
        this.sixes = sixes;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRunsScored() {
        return runsScored;
    }

    public void setRunsScored(int runsScored) {
        this.runsScored = runsScored;
    }

    public int getCenturies() {
        return centuries;
    }

    public void setCenturies(int centuries) {
        this.centuries = centuries;
    }

    public int getHalfCenturies() {
        return halfCenturies;
    }

    public void setHalfCenturies(int halfCenturies) {
        this.halfCenturies = halfCenturies;
    }

    public int getBallsFaced() {
        return ballsFaced;
    }

    public void setBallsFaced(int ballsFaced) {
        this.ballsFaced = ballsFaced;
    }

    public int getFours() {
        return fours;
    }

    public void setFours(int fours) {
        this.fours = fours;
    }

    public int getSixes() {
        return sixes;
    }

    public void setSixes(int sixes) {
        this.sixes = sixes;
    }

    public int getId() {
        return id;
    }

    public float getStrikeRate() {
        return ballsFaced > 0 ? (runsScored / (float) ballsFaced) * 100 : 0;
    }

    public int getRunsScoredInBoundaries() {
        return (fours * 4) + (sixes * 6);
    }

    @Override
    public String toString() {
        return "Batsman [id=" + id + ", name=" + name + ", runsScored=" + runsScored +
               ", centuries=" + centuries + ", halfCenturies=" + halfCenturies +
               ", ballsFaced=" + ballsFaced + ", fours=" + fours + ", sixes=" + sixes +
               ", strikeRate=" + getStrikeRate() + "]";
    }
}

public class Batsman3 {
    public static void main(String[] args) {
        Batsman1 b1 = new Batsman1();
        b1.setName("Virat Kohli");
        b1.setRunsScored(12000);
        b1.setCenturies(46);
        b1.setHalfCenturies(65);
        b1.setBallsFaced(13000);
        b1.setFours(1100);
        b1.setSixes(250);

        System.out.println("Id: " + b1.getId());
        System.out.println("Name: " + b1.getName());
        System.out.println("Strike Rate: " + b1.getStrikeRate());
        System.out.println("Runs in Boundaries: " + b1.getRunsScoredInBoundaries());
        System.out.println(b1); // Full object details
    }
}