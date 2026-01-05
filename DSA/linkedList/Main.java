
class Node {

    int data;
    Node next;

    public Node(int value) {
        this.data = value;
        this.next = null;
    }
}

class CircularLinkedList {

    Node head;

    public CircularLinkedList() {
        head = null;
    }


    void insertAtHead(int value) {
        Node newNode = new Node(value);

        if (head == null) { 
            head = newNode;
            newNode.next = head;
        } else {
            Node temp = head;

            while (temp.next != head) {
                temp = temp.next;
            }

            newNode.next = head;
            head = newNode;
            temp.next = head; 
        }
    }

    
    void insertAtEnd(int value) {
        Node newNode = new Node(value);

        if (head == null) {
            head = newNode;
            newNode.next = head;
            return;
        }

        Node temp = head;
        while (temp.next != head) {
            temp = temp.next;
        }

        temp.next = newNode;
        newNode.next = head;
    }


    void insertAtPosition(int value, int position) {
        if (position == 0) {
            insertAtHead(value);
            return;
        }

        Node newNode = new Node(value);
        Node temp = head;

        for (int i = 0; i < position - 1 && temp.next != head; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
    }

  
    void deleteHead() {
        if (head == null) {
            return;
        }

        if (head.next == head) { 
            head = null;
            return;
        }

        Node temp = head;

        while (temp.next != head) {
            temp = temp.next; 
        }

        temp.next = head.next; 
        head = head.next;      
    }

  
    void deleteEnd() {
        if (head == null) {
            return;
        }

        if (head.next == head) { 
            head = null;
            return;
        }

        Node temp = head;

        while (temp.next.next != head) {
            temp = temp.next;
        }

        temp.next = head; 
    }

    
    void deleteAtPosition(int pos) {
        if (head == null) {
            return;
        }

        if (pos == 0) {
            deleteHead();
            return;
        }

        Node temp = head;

        for (int i = 0; i < pos - 1 && temp.next != head; i++) {
            temp = temp.next;
        }

        if (temp.next == head) {
            return; 
        }
        temp.next = temp.next.next;
    }

   
    void printList() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }

        Node temp = head;

        do {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        } while (temp != head);

        System.out.println("Back to Head (" + head.data + ")");
    }
}

// ==========================================
// MAIN METHOD
// ==========================================
public class Main {

    public static void main(String[] args) {

        CircularLinkedList c = new CircularLinkedList();

        c.insertAtHead(30);
        c.insertAtHead(20);
        c.insertAtHead(10);

        System.out.println("Insertion At Head:");
        c.printList();

        c.insertAtEnd(40);
        c.insertAtEnd(50);

        System.out.println("Insertion At End:");
        c.printList();

        c.insertAtPosition(25, 2);
        System.out.println("Insertion At Position 2:");
        c.printList();

        // ------- Deletion Examples ------
        System.out.println("\nDelete Head:");
        c.deleteHead();
        c.printList();

        System.out.println("Delete End:");
        c.deleteEnd();
        c.printList();

        System.out.println("Delete At Position 2:");
        c.deleteAtPosition(2);
        c.printList();
    }
}
