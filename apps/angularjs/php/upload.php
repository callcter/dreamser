<?php

$storage = new SaeStorage();
$domain = 'media';

$fileType = $_FILES['file']['type'];

if(($fileType=='image/gif')||($fileType=='image/jpg')||($fileType=='image/png')){
    if($storage->fileExits($domain,$filename)==true){
        echo '图片已存在';
    }
    else{
        $filename = $_FILES['file']['name'];
        $storage->upload($domain,$filename,$_FILES[file][tmp_name]);
        echo '上传成功:'+$filename;
    }
}

?>