<?php
header("Access-Control-Allow-Origin: *");
header('Cache-Control: no-cache, must-revalidate');
header('Content-Type: application/json; charset=utf-8');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


require "vendor/autoload.php";
session_start();
if(isset($_POST) and !empty($_POST))
{
    $mail = new PHPMailer(true);
    try
    {
        $dados = file_get_contents("php://input");
        $dadosFormat = json_decode($dados);

        $nome = $dadosFormat->name;
        $email = $dadosFormat->email;
        $mensagem = $dadosFormat->message;
        if(!empty($nome) && !empty($email) && !empty($mensagem))
        {
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = "julisnopaulo.santos@gmail.com";
            $mail->Password = "24759383Jl2932";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            $mail->setFrom($email,$nome);
            $mail->addReplyTo($email, $nome);
            $mail->addAddress("julisnopaulo.santos@gmail.com", "Juliano Paulo");
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = 'Contato Profissional';
            $mail->Body = $mensagem;

            if($mail->send())
            {
                echo json_encode(["sent" => false]);
            }
            else
            {
                echo json_encode(["error" => $mail->ErrorInfo]);
                $_POST['error'] = json_encode($mail->ErrorInfo);
            }
        }
        else
        {
            echo json_encode(["erro"=>"Dados incorretos!"]);
        }

    }
    catch (\Exception $e)
    {
        echo json_encode($e->getMessage());
    }
}
else
{
    echo json_encode("Erro");
}

/*use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';
    $err = false;
    $msg = '';
    $email = '';

    if (array_key_exists('message', $_POST)) {
        $query = substr(strip_tags($_POST['message']), 0, 16384);
    } else {
        $query = '';
        $msg = 'Nenhuma mensagem escrita!';
        $err = true;
    }

    if (array_key_exists('name', $_POST)) {

        $name = substr(strip_tags($_POST['name']), 0, 255);
    } else {
        $name = '';
    }
    if (array_key_exists('email', $_POST) && PHPMailer::validateAddress($_POST['email'])) {
        $email = $_POST['email'];
    } else {
        $msg .= 'Erro: e-mail inserido invalido';
        $err = true;
    }
    if (!$err) {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.live.com';
        $mail->Port = 587;
        $mail->Username = "julianopaulo.santos@hotmail.com";
        $mail->Password = "24759383Jl2932";
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->CharSet = PHPMailer::CHARSET_UTF8;
        $conteudo = "Juliano Paulo";
        $para = "julisnopaulo.santos@gmail.com";

        $mail->setFrom($email, (empty($name) ? 'Contact form' : $name));
        $mail->addAddress($para);
        $mail->addReplyTo($email, $name);
        $mail->Subject = 'Contato Profissional';
        $mail->Body = "teste\n".$query;
        if (!$mail->send()) {
            $msg .= 'Erro ao enviar, verifique os dados!';
        } else {
            $msg .= 'Mensagem enviada com sucesso!';
        }
    }
    echo json_encode($msg);

    if(isset($_POST))
    {
        var_dump($_POST);
    }
*/

 ?>