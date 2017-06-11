<?php

// Pegar os campos do formulario acima
$login = $_POST["email"];
$senha = $_POST["senha"];
echo $login.' - '.$senha;

// Montar o SQL para pesquisar
$db = mysqli_connect("localhost", "root", "", "sandvigbookstore");
$sql = "SELECT * FROM usuarios WHERE email = '$login' AND senha = '$senha' ";
$res = mysqli_query($db, $sql) or die("ERRO ao pesquisar login. " .
mysqlerror());

if ($registro = mysqli_fetch_assoc($res)) {
 // Criar a sessao. Login e senha conferem
    $nome = $registro["nome"];
    session_start();
    $_SESSION["login"] = $login;
    $_SESSION["nome"] = $nome;
    header("Location: http://localhost/nois-book-store/#/dashboard");
} else {
 // Login e senha NAO conferem
    header("Location: http://localhost/nois-book-store/#/");
}
