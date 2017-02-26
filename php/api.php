<?php
// Build A Class to Clean Data
class Fladina_Apis {

  private $replay_time = "24 Hours";
  private $successMessage = "Your Message has been Sent , I will replay to you within";
  private $email_to = "moun2030@gmail.com";

  /* Stop script or html tags or anything else */
  public function Fladina_Stop_Clean_Tags($data) {
    $data = preg_replace("/javascript/i", "j&#097;v&#097;script",$data);
    $data = preg_replace("/alert/i", "&#097;lert",$data);
    $data = preg_replace("/about:/i", "&#097;bout:",$data);
    $data = preg_replace("/onmouseover/i", "&#111;nmouseover",$data);
    $data = preg_replace("/onclick/i", "&#111;nclick",$data);
    $data = preg_replace("/onload/i", "&#111;nload",$data);
    $data = preg_replace("/onsubmit/i", "&#111;nsubmit",$data);
    $data = preg_replace("/<body/i", "&lt;body",$data);
    $data = preg_replace("/<html/i", "&lt;html",$data);
    $data = preg_replace("/document\./i", "&#100;ocument.",$data);
    $data = preg_replace("/<script/i", "&lt;&#115;cript",$data);
    $data = str_replace(' & ', ' &amp; ', $data);
    return (get_magic_quotes_gpc() ? stripslashes($data) : $data);
  }
  /*This Function is Sending an Emails*/
  public function Fladina_Mailer( $subject , $message , $from ) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html; charset=utf-8" . "\r\n";
    $headers .= "From: <$from>" . "\r\n";
    return mail($this->email_to , $subject, $message, $headers);
  }
  public function Auto_replay_to_message_sent_success (){
    return $this->successMessage.' '.$this->replay_time;
  }
}

?>
