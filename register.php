<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'database.php';

$database = new Database();
$db = $database->getConnection();
$data = json_decode(file_get_contents("php://input"), true);

//select the last user_id
$q= "SELECT user_id FROM user ORDER BY user_id DESC LIMIT 1";

//user_id is the last user_id + 1
$stmt = $db->prepare($q);
$stmt->execute();
$stmt->bind_result($user_id);
$stmt->fetch();
$stmt->close();
$user_id = $user_id + 1;
$username = $data['username'];
$email = $data['email'];
$password = $data['password'];
$isSeller = $data['isSeller'];

$query = "INSERT INTO user (user_id, username, email, password_hash, is_seller) VALUES (?, ?, ?,?,?)";
$stmt = $db->prepare($query);
$stmt->bind_param("isssi", $user_id, $username, $email, $password, $isSeller);
if ($stmt->execute()){
    http_response_code(201);
    echo json_encode(array("message" => "User was created."));
} else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to create user."));
}
?>