<?php
     $title = 'Halley Store' ;
     $description = 'Túi đeo chéo, Cặp đeo chéo, Túi quai chéo, Ba lô, Túi xách uy tín tại TPHCM' ;
     $keywords = 'túi đeo chéo, cặp đeo chéo, túi quai chéo' ;
     $img_url = '';
     if(isset($_GET['type'])) {
      $type = $_GET['type'];
        if ($type == 'chi-tiet') {
            $id_product = $_GET['id'];
            $img_url = '/assets/default/products/'.$id_product.'_avatar.jpg';
        } elseif ($type == 'danh-muc') {
            $img_url = '/assets/default/images/banner-02.jpg';
            $id_product = $_GET['id'];
            switch ($id_product) {
                case '-Kq26UPTfQTdGKitocwa':
                    $title = 'Ba lô laptop' ;
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

