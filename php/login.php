<?php
 
$servername = "localhost";
$username = "root";
$password = "123456789";   
$dbname = "Debug_cafe";

 
$conn = new mysqli($servername, $username, $password, $dbname);

 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_POST['email'];
    $password_input = $_POST['password'];

     $sql = "SELECT * FROM Users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);   

     $stmt->execute();
    $result = $stmt->get_result();

     if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
         if ($password_input === $row['password']) {
            echo "تم تسجيل الدخول بنجاح!";
         } else {
            echo "الباسورد غير صحيح!";
        }
    } else {
        echo "الإيميل غير موجود!";
    }

     $stmt->close();
}

 $conn->close();
?>
