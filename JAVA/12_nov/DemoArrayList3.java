import java.util.ArrayList;

class MyObject {
    String name;

    MyObject(String name) {
        this.name = name;
    }

    public String toString() {
        return "MyObject: " + name;
    }
}

public class DemoArrayList3 {
    public static void main(String[] args) {
        ArrayList<MyObject> list = new ArrayList<>();

        list.add(new MyObject("Alice"));
        list.add(new MyObject("Bob"));
        list.add(new MyObject("Charlie"));

        
//        for (MyObject obj : list) {
//            System.out.println(obj);
//        }
        MyObject customObj = new MyObject("Ram");
        list.add(customObj);
        list.add(true);
        
    }
}