<?php
$host="localhost"; //replace with database hostname 
$username="root"; //replace with database username 
$password="root"; //replace with database password 
$db_name="tesis"; //replace with database name

$con=mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");
$sql = "select id, nombre, latitud, longitud from poi";
$result = mysql_query($sql);

$arr = array();

while($obj = mysql_fetch_object($result)){
	
	$arr[] = array('ID' => $obj->id,
				   'NOMBRE' => utf8_encode($obj->nombre),
				   'NAME' => utf8_encode($obj->name),
				   'NOME' => utf8_encode($obj->nombre),
				   'LA' => utf8_encode($obj->latitud),
				   'LO' => utf8_encode($obj->longitud)
				   );
				   
}
mysql_close($con);
echo '' . json_encode($arr) . '';
?> 
