<?php
  if(file_exists('./counter/visitor_count.txt')){
    $visits = fopen('./counter/visitor_count.txt','r');
    $v = fread($visits,filesize('./counter/visitor_count.txt'));
    fclose($visits);
    echo $v+1;
    $visits = fopen('./counter/visitor_count.txt','w');
    fwrite($visits,$v+1);
    fclose($visits);
  }
  else{
    $visits = fopen('./counter/visitor_count.txt','w');
    echo "1";
    fwrite($visits,1);
    fclose($visits);
  }
?>
