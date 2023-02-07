<?php
class Database {
    private $host = "localhost";
    private $db_name = "id20266486_chall_48h";
    private $username = "id20266486_root";
    private $password = "8n[g|@iRMVQOGO[r";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
        } catch (mysqli_sql_exception $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
