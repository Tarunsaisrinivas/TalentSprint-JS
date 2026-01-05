
class Node {

    int data;
    Node next;

    public Node(int value) {
        this.data = value;
        this.next = null;
    }
}

class SinglyLinkedList {

    Node head;

    public SinglyLinkedList() {
        head = null;
    }

    void insertAtHead(int value) {
        Node newNode = new Node(value);
        if (head == null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
        System.out.println(value + " inserted at head.");
    }

    void insertAtEnd(int value) {
        if (head == null) {
            insertAtHead(value);
        } else {
            Node newNode = new Node(value);
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        System.out.println(value + " inserted at end.");
    }

    void insertAtPosition(int value, int pos) {
        if (pos == 1) {
            insertAtHead(value);
        }
        Node newNode = new Node(value);
        Node temp = head;
        for (int p = 1; p < pos - 1 && temp != null; p++) {
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("Position out of range.");
        }
        newNode.next = temp.next;
        temp.next = newNode;
        System.out.println(value + " inserted at " + pos + " position.");
    }

    void deleteFromHead() {
        if (head == null) {
            System.out.println("List is Empty.");
        } else {
            System.out.println(head.data + " deleted from head.");
            head = head.next;
        }
    }

    void deleteFromEnd() {
        if (head == null) {
            System.out.println("List is Empty.");
        } else if (head.next == null) {
            deleteFromHead();
        } else {
            Node temp = head;
            Node prev = head;
            while (temp.next != null) {
                prev = temp;
                temp = temp.next;
            }
            System.out.println(temp.data + " deleted from End.");
            prev.next = null;
        }
    }

    void deleteAnItem(int item) {
        if (head == null) {
            System.out.println("List is Empty.");
        } else if (head.data == item) {
            deleteFromHead();
        } else {
            Node temp = head;
            Node prev = head;
            while (temp.next != null) {
                if (temp.data == item) {
                    prev.next = temp.next;
                    System.out.println(temp.data + " deleted from the Linked list.");
                    return;
                } else {
                    prev = temp;
                    temp = temp.next;
                }
            }
            if (temp.next == null) {
                System.out.println("Item not found.");
            }
        }

    }

    void search(int item) {
        Node temp = head;
        while (temp.next != null) {
            if (temp.data == item) {
                System.out.println(item + " found in the Linked List.");
                return;
            }
            temp = temp.next;
        }
        if (temp.next == null) {
            System.out.println(item + " not found.");
        }
    }

    int length() {
        int count = 0;
        Node temp = head;
        while (temp.next != null) {
            count++;
            temp = temp.next;
        }
        return count + 1;
    }

    Node findMiddle() {
        if (head == null) {
            return null;
        }
        Node slow = head;
        Node fast = head;

        while (slow.next != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        //System.out.println("The Middle of the linked list is " + slow.data);
        return slow;
    }

    void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }

    int countOccurrences(int key) {
        int count = 0;
        Node temp = head;

        while (temp != null) {
            if (temp.data == key) {
                count++;
            }
            temp = temp.next;
        }
        return count;
    }

    void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;

        while (current != null) {
            next = current.next;  // store next
            current.next = prev;  // reverse link
            prev = current;       // move prev forward
            current = next;       // move current
        }
        head = prev;
        System.out.println("Linked List Reversed.");
    }

    public static void main(String[] args) {
        SinglyLinkedList sll = new SinglyLinkedList();

        sll.insertAtHead(30);
        sll.insertAtHead(20);
        sll.insertAtHead(10);

        sll.printList();
        sll.insertAtEnd(40);
        sll.printList();

        sll.insertAtPosition(25, 3);
        sll.printList();

        sll.reverse();
        sll.printList();

        System.out.println("The length of the linked list is " + sll.length());
        Node res = sll.findMiddle();
        System.out.println("The Middle of the linked list is " + res.data);

        sll.deleteFromHead();
        sll.printList();

        sll.deleteFromEnd();
        sll.printList();

        sll.deleteAnItem(25);
        sll.printList();

        sll.search(20);

        res = sll.findMiddle();
        System.out.println("The Middle of the linked list is " + res.data);
        System.out.println("Count = " + sll.countOccurrences(10));

    }

}
