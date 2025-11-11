//Inheritance topic
class Marks{
	int m,p,c;
	double tot,avg;
	void setMarks(int maths, int phy,int chem) {
		   if (maths > 100 || phy > 100 || chem > 100) {
		        throw new Error("Marks should not exceed 100.");
		    }

	this.m = maths;
	this.p = phy;
	this.c = chem;
	}
	void getMarks() {
		tot = m+p+c;
		avg = tot/3;
		System.out.println("total and average:"+tot +" & "+avg);
	}
}
class Stud extends Marks {
	int sid,age;
	String sname;
	
	public Stud(int sid, int age, String sname) {
		super();
		this.sid = sid;
		this.age = age;
		this.sname = sname;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	@Override
	public String toString() {
		return "stud [sid=" + sid + ", age=" + age + ", sname=" + sname + "]";
	}
	
}
public class StudDetails {
	public static void main(String[] args) {
		Stud s1 = new Stud(101,22,"Tarun");
		System.out.println(s1);
		s1.setMarks(30, 40, 60);
		s1.getMarks();
		
		}
}
