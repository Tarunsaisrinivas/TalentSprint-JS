class Batsman {
    String name;
    int runsScored;
    int centuries;
    int halfCenturies;
    int ballsFaced;
    int fours;
    int sixes;

    void setData(String name, int runsScored, int centuries, int halfCenturies, int ballsFaced, int four, int six) {
        this.name = name;
        this.runsScored = runsScored;
        this.centuries = centuries;
        this.halfCenturies = halfCenturies;
        this.ballsFaced = ballsFaced;
        this.fours = four;
        this.sixes = six;
    }

    int getStrikeRate() {
        return (int)(((float)this.runsScored / this.ballsFaced) * 100);
    }

    int getRunsScoredInBoundaries() {
        return (this.fours * 4) + (this.sixes * 6);
    }
}

public class Batsman1 {
    public static void main(String[] args) {
        Batsman b1 = new Batsman();
        b1.setData("Virat Kohli", 12000, 43, 62, 13000, 1000, 250);
        System.out.println("Strike Rate of " + b1.name + " is : " + b1.getStrikeRate());
        System.out.println("Runs scored in boundaries by " + b1.name + " is : " + b1.getRunsScoredInBoundaries());

        Batsman b2 = new Batsman();
        b2.setData("Rohit Sharma", 9000, 29, 43, 11000, 800, 200);
        System.out.println("Strike Rate of " + b2.name + " is : " + b2.getStrikeRate());
        System.out.println("Runs scored in boundaries by " + b2.name + " is : " + b2.getRunsScoredInBoundaries());
    }
}
