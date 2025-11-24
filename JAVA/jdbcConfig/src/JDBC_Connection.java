package src;

public class JDBC_Connection {
    public static void main(String[] args) {

        String url = "jdbc:mysql://127.0.0.1:3306/classicmodels";
        String user = "root";
        String password = "root";  

//        String createTable = "CREATE TABLE employee ("
//                + "id INT PRIMARY KEY AUTO_INCREMENT, "
//                + "name VARCHAR(100) NOT NULL, "
//                + "age INT NOT NULL, "
//                + "salary DECIMAL(10,2), "
//                + "department VARCHAR(50)"
//                + ")";
//
//        try {
//            Connection con = DriverManager.getConnection(url, user, password);
//            System.out.println("Connected to mysql successfully");
//
//            Statement stmt = con.createStatement();
//            stmt.execute(createTable);
//
//            System.out.println("Employee table created successfully!");
//
//        } catch (SQLException e) {
//            System.out.println("Connection failed: " + e);
//        }
          // Insert data into employee table
        // String insertSQL = "INSERT INTO employee(name, age, salary, department) VALUES (?,?,?,?)";

        // try (Connection conn = DriverManager.getConnection(url, user, password);
        //      PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {

        //     pstmt.setString(1, "Tarun");
        //     pstmt.setInt(2, 23); 
        //     pstmt.setBigDecimal(3, new java.math.BigDecimal("85000.00"));
        //     pstmt.setString(4, "Software"); 

        //     int rowsAffected = pstmt.executeUpdate();
        //     System.out.println("Rows inserted: " + rowsAffected);

        // } catch (SQLException e) {
        //     e.printStackTrace();
        // }

        // Retrieve data from employee table
        // String selectSQL = "SELECT * FROM employee";

        // try (Connection conn = DriverManager.getConnection(url, user, password);
        //      Statement stmt = conn.createStatement();
        //      ResultSet rs = stmt.executeQuery(selectSQL)) {

        //     while (rs.next()) {
        //         int id = rs.getInt("id");
        //         String name = rs.getString("name");
        //         int age = rs.getInt("age");
        //         java.math.BigDecimal salary = rs.getBigDecimal("salary");
        //         String department = rs.getString("department");                 
        //         System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Salary: " + salary + ", Department: " + department);
        //     }

        // } catch (SQLException e) {
        //     e.printStackTrace();
        // }   
        
        // Update data in employee table
        // String updateSQL = "UPDATE employee SET salary = ? WHERE name = ?";

        // try (Connection conn = DriverManager.getConnection(url, user, password);
        //      PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {

        //     pstmt.setBigDecimal(1, new java.math.BigDecimal("95000.00"));
        //     pstmt.setString(2, "Tarun");
        //     int rowsAffected = pstmt.executeUpdate();
        //     System.out.println("Rows updated: " + rowsAffected);

        // } catch (SQLException e) {
        //     e.printStackTrace();
        // }
        // Delete data from employee table
        // String deleteSQL = "DELETE FROM employee WHERE name = ?";

        // try (Connection conn = DriverManager.getConnection(url, user, password);
        //      PreparedStatement pstmt = conn.prepareStatement(deleteSQL)) {

        //     pstmt.setString(1, "Tarun");
        //     int rowsAffected = pstmt.executeUpdate();
        //     System.out.println("Rows deleted: " + rowsAffected);

        // } catch (SQLException e) {
        //     e.printStackTrace();
        // }
        
    }
}
