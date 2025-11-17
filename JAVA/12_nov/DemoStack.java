import java.util.Stack;

public class DemoStack {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        
        stack.push(10);
        stack.push(20);
        stack.push(30);

       
        System.out.println("Stack: " + stack);

    
        System.out.println("Top element: " + stack.peek());

        int popped = stack.pop();
        System.out.println("Popped element: " + popped);

        System.out.println("Stack after pop: " + stack);

        System.out.println("Is stack empty? " + stack.isEmpty());
    }
}