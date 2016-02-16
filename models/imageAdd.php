<?php
    $input = file_get_contents('php://input','r');
    $arrays = json_decode($input, true);
    $header = $arrays['header'];
    $data = $arrays['pic'];
    $img = base64_decode($data);
    
//    $files = $_FILES['pic'];
    $name= 'love-'.time().'.'.$header;
//    $form_data =$files['tmp_name'];
    $s2 = new SaeStorage();

//    $img = new SaeImage();
//    $img_data = file_get_contents($form_data);//获取本地上传的图片数据
//    $img->setData($img_data);
//    $img->resize(180,180); //图片缩放为180*180
//    $img->improve();//提高图片质量的函数
//    $new_data = $img->exec(); // 执行处理并返回处理后的二进制数据
    $s2->write('love',$name,$img);//将public修改为自己的storage 名称
    $url= $s2->getUrl('love',$name);//将public修改为自己的storage 名称echo "文件名：".$name."<br/>";
    echo $url;
?>