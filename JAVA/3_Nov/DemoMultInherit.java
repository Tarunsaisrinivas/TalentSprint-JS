class A {
    int a;

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    @Override
    public String toString() {
        return "A [a=" + a + "]";
    }

    public void display() {
        System.out.println("A value from A: " + a);
    }
}

class B extends A {
    int a; // shadows A.a

    @Override
    public int getA() {
        return a;
    }

    @Override
    public void setA(int a) {
        this.a = a;
    }

    @Override
    public String toString() {
        return "B [a=" + a + "]";
    }

    @Override
    public void display() {
        super.display(); // calls A's display
        System.out.println("A value from B: " + a);
    }
}

class C extends B {
    int a; // shadows B.a

    @Override
    public int getA() {
        return a;
    }

    @Override
    public void setA(int a) {
        this.a = a;
    }

    @Override
    public String toString() {
        return "C [a=" + a + "]";
    }

    @Override
    public void display() {
        super.display(); // calls B's display
        System.out.println("A value from C: " + a);
    }
}

public class DemoMultInherit {
    public static void main(String[] args) {
        C obj = new C();
        obj.setA(100); // sets C.a
        obj.display();
        System.out.println(obj);
    }
}