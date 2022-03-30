<?php
    $connection = mysqli_connect("","","","");
    $sql = "SELECT * FROM utilisateur";
    $result = mysqli_query($connection, $sql);
    $json_array = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $json_array[] = $row;
    }
    echo json_encode($json_array);
    mysqli_close($connection);
?>
