<?php

use PHPMailer\PHPMailer\PHPMailer;

class Mailer
{
    private PHPMailer $mail;

    public function __construct(array $config)
    {
        $this->mail = new PHPMailer(true);

        $this->mail->isSMTP();
        $this->mail->Host       = $config['host'];
        $this->mail->SMTPAuth   = true;
        $this->mail->Username   = $config['username'];
        $this->mail->Password   = $config['password'];
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $this->mail->Port       = $config['port'];

        $this->mail->CharSet   = 'UTF-8';
        $this->mail->Encoding  = 'base64';

        $this->mail->setFrom(
            $config['from_email'],
            $config['from_name']
        );
    }

    public function send(string $to, string $subject, string $html, ?string $replyTo = null, ?string $replyName = null): bool
    {
        $this->mail->clearAllRecipients();
        $this->mail->clearReplyTos();

        $this->mail->addAddress($to);

        if ($replyTo) {
            $this->mail->addReplyTo($replyTo, $replyName ?? '');
        }

        $this->mail->isHTML(true);
        $this->mail->Subject = $subject;
        $this->mail->Body    = $html;

        return $this->mail->send();
    }
}