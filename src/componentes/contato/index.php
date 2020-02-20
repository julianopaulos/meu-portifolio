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


 ?>