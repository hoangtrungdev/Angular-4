<?php
     $title = 'Halley Store' ;
     $description = 'Túi đeo chéo, Cặp đeo chéo, Túi quai chéo, Ba lô, Túi xách uy tín tại TPHCM' ;
     $keywords = 'túi đeo chéo, cặp đeo chéo, túi quai chéo' ;
     $img_url = '';
     if(isset($_GET['type'])) {
      $type = $_GET['type'];
        if ($type == 'chi-tiet') {
            $id_product = $_GET['id'];
            $title = 'Sản phẩm '.$id_product.' - Halley Store' ;
            $img_url = '/assets/default/products/'.$id_product.'_avatar.jpg';
        } elseif ($type == 'danh-muc') {
            $img_url = '/assets/default/images/logo_large.png';
            $id_cate = $_GET['id'];
            switch ($id_cate) {
                case '-Kq26UPTfQTdGKitocwa':
                    $title = 'Ba lô laptop - Halley Store' ;
                    break;
                case '-Kq27c01j67cOQgNBBYh':
                    $title = 'Ba lô máy ảnh - Halley Store' ;
                    break;
                case '-Kq27w24j-4PlxXv4dpz':
                   $title = 'Ba lô thông dụng - Halley Store' ;
                   break;
                case '-Kq2D35RnafJDEnvfbEM':
                    $title = 'Ba lô du lịch - Halley Store' ;
                    break;
                case '-Kq281v6xrgUpf454pEE':
                    $title = 'Túi đựng máy tính bảng - Halley Store' ;
                    break;
                case '-Kq285gxQ26ZPZEdIo5W':
                    $title = 'Túi đựng laptop - Halley Store' ;
                    break;
                case '-Kq287kbUfra8Vapjym0':
                    $title = 'Túi đựng máy ảnh - Halley Store' ;
                    break;
                default:
            }
        }
     }
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo $title ?></title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name='description' content='<?php echo $description ?>'>
        <meta name="keywords" content="<?php echo $keywords ?>">
        <meta name="robots" content="INDEX,FOLLOW">
        <meta property='og:type' content='website'>
        <meta property='og:title' content='<?php echo $title ?>'>
        <meta property='og:description' content='<?php echo $description ?>'>
        <meta property='og:image' content='<?php echo 'http://halley.vn'.$img_url; ?>'>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
         <img src="<?php echo $img_url; ?>">
         <h1><?php echo $title; ?></h1>
         <p><?php echo $description; ?></p>
    </body>
</html>

