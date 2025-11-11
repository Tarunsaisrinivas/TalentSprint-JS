// need to copy file from one to another file example abc.txt to hello.txt
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.util.Scanner;
//
//public class CopyFile {
//    public static void main(String[] args) {
//    	Scanner sc = new Scanner(System.in);
//    	System.out.println("Enter the first file name : ");
//    	String file1 = sc.nextLine();
//    	System.out.println("Enter the Second file name : ");
//    	String file2 = sc.nextLine();
//        try {
//        		System.out.println("The current file path of "+ new File(file1).getAbsolutePath());
//            FileInputStream fis = new FileInputStream(file1);
//    			System.out.println("The current file path of "+ new File(file2).getAbsolutePath());
//            FileOutputStream fos = new FileOutputStream(file2,true);
//            byte[] buffer = new byte[1024];
//            int bytesRead;
//            while ((bytesRead = fis.read(buffer)) != -1) {
//                fos.write(buffer, 0, bytesRead);
//            }
//            fis.close();
//            fos.close();
//
//            System.out.println("File copied successfully!");
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}

// need to copy file from one to another file example abc.txt to hello.txt
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.FileOutputStream;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.util.Scanner;
//
//public class CopyFile {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("Enter the first file name: ");
//        String file1 = sc.nextLine();
//        File sourceFile = new File(file1);
//
//        
//        if (!sourceFile.exists()) {
//            System.out.println("Source file does not exist. Please enter content to create it:");
//            String content = sc.nextLine();
//            try (FileWriter writer = new FileWriter(sourceFile)) {
//                writer.write(content);
//                System.out.println("File created and content written to " + sourceFile.getAbsolutePath());
//            } catch (IOException e) {
//                System.out.println("Error creating or writing to the file.");
//                e.printStackTrace();
//                return;
//            }
//        }
//        
//
//        System.out.print("Enter the second file name: ");
//        String file2 = sc.nextLine();
//        File destFile = new File(file2);
//
//        try (FileInputStream fis = new FileInputStream(sourceFile);
//             FileOutputStream fos = new FileOutputStream(destFile, true)) {
//
//            System.out.println("Copying from: " + sourceFile.getAbsolutePath());
//            System.out.println("Copying to: " + destFile.getAbsolutePath());
//
//            byte[] buffer = new byte[1024];
//            int bytesRead;
//            while ((bytesRead = fis.read(buffer)) != -1) {
//                fos.write(buffer, 0, bytesRead);
//            }
//
//            System.out.println("File copied successfully!");
//
//        } catch (IOException e) {
//            System.out.println("Error during file copy.");
//            e.printStackTrace();
//        }
//    }
//}
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class CopyFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first file name: ");
        String file1 = sc.nextLine();
        File sourceFile = new File(file1);

        
        if (!sourceFile.exists()) {
            System.out.println("Source file does not exist. Please enter content to create it:");
            String content = sc.nextLine();
            try (FileWriter writer = new FileWriter(sourceFile)) {
                writer.write(content);
                System.out.println("File created and content written to " + sourceFile.getAbsolutePath());
            } catch (IOException e) {
                System.out.println("Error creating or writing to the file.");
                e.printStackTrace();
                return;
            }
        } else {
            System.out.print("Source file exists. Do you want to append new content? (yes/no): ");
            String choice = sc.nextLine().trim().toLowerCase();
            if (choice.equals("yes")) {
                System.out.println("Enter content to append:");
                String newContent = sc.nextLine();
                try (FileWriter writer = new FileWriter(sourceFile, true)) {
                    writer.write(System.lineSeparator() + newContent);
                    System.out.println("Content appended to " + sourceFile.getAbsolutePath());
                } catch (IOException e) {
                    System.out.println("Error appending to the file.");
                    e.printStackTrace();
                    return;
                }
            }
        }
        

        System.out.print("Enter the second file name: ");
        String file2 = sc.nextLine();
        File destFile = new File(file2);

        try (FileInputStream fis = new FileInputStream(sourceFile);
             FileOutputStream fos = new FileOutputStream(destFile, true)) {

            System.out.println("Copying from: " + sourceFile.getAbsolutePath());
            System.out.println("Copying to: " + destFile.getAbsolutePath());

            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
            }

            System.out.println("File copied successfully!");

        } catch (IOException e) {
            System.out.println("Error during file copy.");
            e.printStackTrace();
        }
    }
}
