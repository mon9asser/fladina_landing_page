<?php
 // Check If Api Dir File is Correct Require it else stop the calling
  $api_file = dirname(__FILE__)."/api.php";
  if(is_file($api_file))
  require_once $api_file ;
  else
  exit('Something an error , Please try Later');


  // Calling Api Class
  $Fladina_apis = new Fladina_Apis();

  // check if passed data is not empty
  if(
    empty($_POST['full-name'])
    ||
    empty($_POST['user-email'])
    ||
    empty($_POST['Subject'])
    ||
    empty($_POST['Message'])
    )
    exit ("<span class='form-results'>All Fields are required</span>");



  // check and clean data
  if(!filter_var($_POST['user-email'] , FILTER_VALIDATE_EMAIL))
     exit("<span class='form-results'>This is not an email ! , Please Fill With Valid Email . </span>");



  $_POST['full-name'] = $Fladina_apis->Fladina_Stop_Clean_Tags($_POST['full-name']);
  $_POST['user-email']= $Fladina_apis->Fladina_Stop_Clean_Tags($_POST['user-email']);
  $_POST['user-phone-number']= $Fladina_apis->Fladina_Stop_Clean_Tags($_POST['user-phone-number']);
  $_POST['Subject']= $Fladina_apis->Fladina_Stop_Clean_Tags($_POST['Subject']);
  $_POST['Message']= $Fladina_apis->Fladina_Stop_Clean_Tags($_POST['Message']);

  //  Message From User with inline Css because it will send to an email
  $message = NULL ;
  $message .= '<div style="width:100%;display:block;overflow:hidden;padding10px;">';
  $message .= '<b style="width:100%;display:block;overflow:hidden;">';
  $message .= '<span style="font-weight:lighter;">Hi , I am </span>';
  $message .=  trim($_POST['full-name']);
  $message .= '</b>';
  $message .= '<p style="width:100%;display:block;overflow:hidden; padding:15px;">';
  $message .=  trim($_POST['Message']);
  $message .= '</p>';
  $message .= '<b style="width:100%;display:block;overflow:hidden;">';
  $message .= '<span style="font-weight:lighter;">My Email is: </span>';
  $message .= trim($_POST['user-email']);
  $message .= '<span style="font-weight:lighter;"> and my phone Number: </span>';
  $message .= trim($_POST['user-phone-number']);
  $message .= '</b>';
  $message .= '</div>';
  // Message Ended here

  if($Fladina_apis->Fladina_Mailer( trim($_POST['Subject']) , $message , $_POST['user-email'] ))
  echo "<span class='form-results-successed'>".$Fladina_apis->Auto_replay_to_message_sent_success()."</span>";
  else
  echo "<span class='form-results'> There is an error with sending this email , Please try Later </span>";
?>
