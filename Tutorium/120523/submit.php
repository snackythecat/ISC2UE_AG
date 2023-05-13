<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    //Speichert Value aus Post in Variable
    $name = $_POST['inputName'];
    $message = $_POST['inputMessage'];

    $file = fopen('messages.txt', 'a');
    fwrite($file, "$name|$message\n");
    fclose($file);
    header('Location: index.php');
    exit;

} else{
    echo "<p>ungültige Anfrage</p>";
}