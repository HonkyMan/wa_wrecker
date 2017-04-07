<?
$name = $_GET['name'];
$tel = $_GET['tel'];
$carType = $_GET['type_of_car'];
$wheelBlock = $_GET['wheelBlock'];
$helmBlock = $_GET['helmBlock'];
$fastStart = $_GET['fastStart'];
$unlockAKP = $_GET['unlockAKP'];
$message = $_GET['message'];

if($name != '' && $tel != '')
{
    $to  = "Kamil &lt;1k6j01@gmail.com>, " ; 
    $to .= "Kamila &lt;gainull97@yandex.ru>"; 

    $subject = "New order"; 

    $message = ' 
    <html> 
        <head> 
            <title>New order from the website</title> 
        </head> 
        <body> 
            <p>Name: '.$name.'<p> <br>
            <p>Tel: '.$tel.'<p> <br>
            <p>Car Type: '.$carType.'<p> <br>
        </body> 
    </html>'; 

    $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
    $headers .= "From: Wreck Auto <birthday@example.com>\r\n"; 
    $headers .= "Bcc: birthday-archive@example.com\r\n"; 

    mail($to, $subject, $message, $headers); 
}
?>