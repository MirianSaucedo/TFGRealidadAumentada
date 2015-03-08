    <?php
    mysql_connect("127.0.0.1","root","");
    mysql_select_db("tesis");
     
    $q=mysql_query("SELECT * FROM poi");
    while($e=mysql_fetch_assoc($q))
            $output[]=$e;
     
    print(json_encode($output));
     
    mysql_close();
    ?>
