<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Chaves do .ENV
$smtp_host = $_ENV['SERVER_SMTP'];
$smtp_username = $_ENV['LOGIN'];
$smtp_password = $_ENV['SENHA'];
$smtp_interface = $_ENV['INTERFACE'];

// Dados do form

$nome = $_POST['nome'];
$email = $_POST['email'];
$cep = $_POST['cep'];
$rua = $_POST['rua'];
$numero = $_POST['numero'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];

// Configurando o servidor smtp
$mail = new PHPMailer(true);
try {
    // Configurações do servidor SMTP

    $mail->SMTPDebug = 0; // 0 Para desabilitar o debug do smtp
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = $smtp_interface;

    // Remetente e destinatario
    $mail->setFrom('bigriann18@gmail.com', 'Rian Joseph');
    $mail->addAddress('202202923931@alunos.estacio.br', 'Rian Aluno');

    // Conteudo do email
    $mail->isHTML(true);
    $mail->Subject = 'Novo Cadastro feito!';
    $mail->Body = "Nome: $nome<br>Email: $email<br>";

    // Envia o email
    $mail->send();

}catch(Exception $e){
    echo "Erro ao enviardo o e-mail: {$mail->ErrorInfo}";
}

?>
