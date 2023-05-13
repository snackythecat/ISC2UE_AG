<!doctype html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Gästebuch</title>

</head>
<body>
<?php include('includes/header.php') ?>
<main>
    <h1>Gästebuch</h1>
    <form method ="post" action="submit.php">
        <div>
            <label for="name">Name</label>
            <input type="text" name="inputName" id="name" required>
        </div>
        <div>
            <label for="message"> Ihre Nachrichten</label>
            <input type="text" name="inputMessage" id="message" required>
        </div>
        <button type="submit">Absenden</button>

    </form>

    <h2>Bisherige Einträge</h2>

    <ul>
        <?php

        $file= fopen('messages.txt', 'r');
        $line =file('messages.txt');

        fclose($file);
        foreach ($line as $entryID => $line){
            list($name, $message) = explode('|', $line);

        ?>

        <li class="flex">
            <span>
                <strong><?= $name ?>:</strong> <?= $message ?>
            </span>
            <span class="flex">
                <a href="edit.php?id=<?= $entryID?>">Bearbeiten</a>
                <form method="post" action ="delete.php">
                    <input type="hidden" name="entryID" value="<?= $entryID?>">
                    <button type="submit">Löschen</button>


                </form>
            </span>
<?php } ?>
        </li>
    </ul>
</main>


</body>
</html>
