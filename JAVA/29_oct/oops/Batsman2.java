class Batsman {
    String name;
    private int runsScored;
    private int centuries;
    private int halfCenturies;
    private int ballsFaced;
    private int fours;
    private int sixes;

    public Batsman(String name, int runsScored, int centuries, int halfCenturies, int ballsFaced, int fours, int sixes) {
        this.name = name;
        this.runsScored = runsScored;
        this.centuries = centuries;
        this.halfCenturies = halfCenturies;
        this.ballsFaced = ballsFaced;
        this.fours = fours;
        this.sixes = sixes;
        
    }
    
    int getStrikeRate() {
        return (int)(((float)this.runsScored / this.ballsFaced) * 100);
    }

    int getRunsScoredInBoundaries() {
        return (this.fours * 4) + (this.sixes * 6);
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}

public class Batsman2 {
    public static void main(String[] args) {
        Batsman b1 = new Batsman("Virat Kohli", 12000, 43, 62, 13000, 1000, 250);
        System.out.println("Strike Rate of " + b1.getName() + " is : " + b1.getStrikeRate());
        System.out.println("Runs scored in boundaries by " + b1.getName() + " is : " + b1.getRunsScoredInBoundaries());

        Batsman b2 = new Batsman("Rohit Sharma", 9000, 29, 43, 11000, 800, 200);
        System.out.println("Strike Rate of " + b2.getName() + " is : " + b2.getStrikeRate());
        System.out.println("Runs scored in boundaries by " + b2.getName() + " is : " + b2.getRunsScoredInBoundaries());
    }
}
