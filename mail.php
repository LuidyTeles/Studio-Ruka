<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturando os dados do formulário
    $to = 'demo@site.com'; // Altere para seu email real
    $firstname = isset($_POST["name"]) ? $_POST["name"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $subject = isset($_POST["subject"]) ? $_POST["subject"] : 'Sem assunto';
    $text = isset($_POST["message"]) ? $_POST["message"] : '';

    // Validação básica (verifica se os campos obrigatórios estão preenchidos)
    if (empty($firstname) || empty($email) || empty($subject) || empty($text)) {
        die("Erro: Todos os campos são obrigatórios.");
    }

    // Cabeçalhos do e-mail
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";

    // Corpo do e-mail
    $message = '<table style="width:100%; border-collapse: collapse;" border="1">
        <tr><td><strong>Nome:</strong></td><td>' . htmlspecialchars($firstname) . '</td></tr>
        <tr><td><strong>Email:</strong></td><td>' . htmlspecialchars($email) . '</td></tr>
        <tr><td><strong>Assunto:</strong></td><td>' . htmlspecialchars($subject) . '</td></tr>
        <tr><td><strong>Mensagem:</strong></td><td>' . nl2br(htmlspecialchars($text)) . '</td></tr>
    </table>';

    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo 'A mensagem foi enviada com sucesso!';
    } else {
        echo 'Falha ao enviar a mensagem.';
    }
} else {
    echo 'Método de requisição inválido.';
}
?>