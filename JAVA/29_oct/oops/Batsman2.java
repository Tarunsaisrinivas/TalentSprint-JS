class Batsman {
    String name;
    private int runsScored;
    private int centuries;
    private int halfCenturies;
    private int ballsFaced;
    private int fours;
    private int sixes;
    public Batsman() {
    		
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
	public Batsman(String name, int runsScored, int centuries, int halfCenturies, int ballsFaced, int fours, int sixes) {
        this.name = name;
        this.runsScored = runsScored;
        this.centuries = centuries;
        this.halfCenturies = halfCenturies;
        this.ballsFaced = ballsFaced;
        this.fours = fours;
        this.sixes = sixes;
        
    }
    
    float getStrikeRate() {
        return (this.runsScored / this.ballsFaced) * 100;
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
       Batsman b1 = new Batsman();
       b1.setName("virat");
       b1.setCenturies(200);
       System.out.println("Name :" + b1.getName());
       
    }
}
