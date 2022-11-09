<?php 
$mydata = $_REQUEST['datavalue']; 
$a = array("ML","WP","XML"); 
$b = array("BigData","DBMS","HTML"); 
if($mydata == "Btech") 
{ 
    foreach($a as $x) 
    { 
        echo "<option>$x</option>"; 
    } 
} 
if($mydata == "MBATech") 
{ 
    foreach($b as $x) 
    { 
        echo "<option>$x</option>"; 
    } 
} 
?>