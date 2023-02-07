<?php
// Configurez les en-têtes pour indiquer que le contenu renvoyé sera au format JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


// Établissez une connexion à la base de données
$host = 'localhost';
$username = 'id20266486_root';
$password = '8n[g|@iRMVQOGO[r';
$dbname = 'id20266486_chall_48h';

$conn = mysqli_connect($host, $username, $password, $dbname);

// Vérifiez la connexion
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Écrivez une requête SQL pour récupérer toutes les entrées de la table
$sql = "SELECT * FROM user";
$result = mysqli_query($conn, $sql);

// Stocker les résultats dans un tableau
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Renvoyez les données sous forme de JSON
echo json_encode($data);

// Fermez la connexion à la base de données
mysqli_close($conn);
?>
