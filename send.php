<?php


   $data = array(
      "name" => $_POST['name'],
      "email" => $_POST['email'],
   );

echo json_encode($data);