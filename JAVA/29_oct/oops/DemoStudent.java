class Student{
    int sid,m,p,c;
    String sname;

    void read(int id,String name){
        sid=id;
        sname=name;
    }
    void setMarks(int mark1,int mark2,int mark3){
        m=mark1;
        p=mark2;
        c=mark3;
    }
    void display(){
        System.out.println("Student id : "+sid);
        System.out.println("Student name : "+sname);
        System.out.println("Marks in Maths : "+m);
        System.out.println("Marks in Physics : "+p);
        System.out.println("Marks in Chemistry : "+c);
    }
    

}
public class DemoStudent{
    public static void main(String[] args) {
        Student s1=new Student();
        s1.read(101,"Tarun");
        s1.setMarks(85,90,78);
        s1.display();

        Student s2=new Student();
        s2.read(102,"Amit");
        s2.setMarks(75,80,88);
        s2.display();
    }
}