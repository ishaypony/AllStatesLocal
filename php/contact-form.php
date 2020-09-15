<?php 
//////////////////////////
//Specify default values//
//////////////////////////

//Your E-mail
$your_email = 'info@allstatesheatingandcooling.com';

//Default Subject if 'subject' field not specified
$default_subject = 'Website Contact Reach';

//Message if 'name' field not specified
$phone_email_missing = 'Missing email/phone number. Please provide at least one of them so we can get back to you.';

//Message if e-mail sent successfully
$email_was_sent = 'Thanks, your message successfully sent';

//Message if e-mail not sent (server not configured)
$server_not_configured = 'Sorry, mail server not configured (function "mail()" disabled on your server?)';

$response = ['status' => false];


///////////////////////////
//Contact Form Processing//
///////////////////////////
$errors = array();

//"name" field required by this PHP script even if 
// there are no 'aria-required="true"' or 'required' 
// attributes on this HTML input field
if(isset($_POST['name'])) {
	
	if(!empty($_POST['name']))
		$sender_name  = stripslashes(strip_tags(trim($_POST['name'])));
	
	if(!empty($_POST['message']))
		$message      = stripslashes(strip_tags(trim($_POST['message'])));

	if(!empty($_POST['phone']))
		$phone      = stripslashes(strip_tags(trim($_POST['phone'])));
	
	if(!empty($_POST['email']))
		$sender_email = stripslashes(strip_tags(trim($_POST['email'])));
	
	if(!empty($_POST['subject']))
		$subject      = stripslashes(strip_tags(trim($_POST['subject'])));


	//Message if no sender name was specified
	if(empty($phone) && empty($sender_email)) {
		$errors[] = $phone_email_missing;
	}

	$from = "MIME-Version: 1.0" . "\r\n" ;
	$from .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
	$from .= (!empty($sender_email)) ? 'From: '.$sender_email : '';

	$subject = (!empty($subject)) ? "Website Contact Reach: " . $subject : $default_subject;


	//sending message if no errors
	if(empty($errors)) {
		
		//duplicating email meta (from and subject) to email message body
		$message_meta = '';
			//From name and email
		$message_meta .= 'From: '. $sender_name . ' ' . $sender_email . "<br>";
			//Subject or default subject
		$message_meta .= 'Subject: '. ( $subject ? $subject : $default_subject ) . "<br>";

		//adding another CUSTOM contact form fields that added by user to email message body
		foreach ($_POST as $key => $value) {
			//checking for standard fields 
			if ($key == 'name' || $key == 'message' || $key == 'subject' || $key == 'email'  ) {
				continue;
			}
			//adding key-value pare to email message body
			$message_meta .= stripslashes(strip_tags(trim($key))) . ': ' . stripslashes(strip_tags(trim($value))) . "<br>";
		}

		$message = $message_meta . "<br>" . 'Message:' . "<br>" . $message;
		$message = wordwrap($message, 70);
	
		if (mail($your_email, $subject, $message, $from)) {
			// echo $email_was_sent;
			$response['status'] = true;
		} else {
			$errors[] = $server_not_configured;
			$response['error'] = implode('<br>', $errors );
			// echo '<span class="form-errors">' . implode('<br>', $errors ) . '</span>';
		}
	} else {
		// echo '<span class="form-errors">' . implode('<br>', $errors ) . '</span>';
		$response['error'] = implode('<br>', $errors );
	}
} else {
	// if "name" var not send ('name' attribute of contact form input field was changed or missing)
	// echo '"name" variable were not received by server. Please check "name" attributes for your input fields';
	// echo 'Name not specified.';
	$response['error'] = "Name not specified.";
}

echo json_encode($response);
?>