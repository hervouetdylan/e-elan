<?php

include_once 'database.php';

$database = new Database();
$db = $database->getConnection();
$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];

$query = "SELECT * FROM user WHERE username = ?";
$stmt = $db->prepare($query);
$stmt->bind_param("s", $username);
if ($stmt-> execute()) {
    $stmt->bind_result($user_id, $username, $email, $password_hash, $is_seller);
    $stmt->fetch();
    if (password_verify($password, $password_hash)) {
        http_response_code(200);
        echo json_encode(array("message" => "User was verified."));
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Unable to verify password."));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unable to verify."));
}
?>
