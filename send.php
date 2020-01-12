<?php

sleep(4);

if(isset($_POST)){
   $data = array(
      "name" => $_POST['name'],
      "email" => $_POST['email'],
   );
}

echo json_encode($data);