<?php 
$data=$_REQUEST['C:\Users\Laddha\Desktop\project\JSON file using PHP server-side scripting.html']; 
$a=array('Machine Learning','Advance Web Programming','Python','Linux'); 
$b=array('Management','Accounts','PEM'); 
if($data=="B.Tech") 
{ 
    foreach($a as $aone) 
    { 
        echo"<option>$aone</option>"; 
    } 
} 
if($data=="MBA.Tech") 
{ 
    foreach($b as $aone) 
    {
        echo"<option>$aone</option>"; 
    } 
} 
?>