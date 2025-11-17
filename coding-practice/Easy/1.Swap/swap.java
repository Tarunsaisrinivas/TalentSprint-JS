public class swap{
    public static void main(String[] args){
        int a = 14;
        int b = 19;

        System.out.println("before swap : a = "+a+"b = "+b);

      a = a + b; // a now becomes 33
      b = a - b; // b becomes 14
      a = a - b; // a becomes 19
        System.out.println("After swap : a = "+a+"b = "+b);
    }
}