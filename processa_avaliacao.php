<?php
// processa_avaliacao.php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "nome_do_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Conexão falhou: ' . $conn->connect_error]));
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$nota = $_POST['nota'];
$comentario = $_POST['comentario'];

$sql = "INSERT INTO avaliacoes (nome, email, nota, comentario) VALUES ('$nome', '$email', '$nota', '$comentario')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro: ' . $sql . '<br>' . $conn->error]);
}

$conn->close();
?>
