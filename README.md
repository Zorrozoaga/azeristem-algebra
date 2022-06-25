<html lang="es">
<div id="main-page">
<head>
	<meta charset="utf-8">
	<title> AzeriSTEM (Álgebra básica) </title>
	<!--link rel="stylesheet" type="text/css" href="website.css"-->
	<!-- This is an alternative CSS command -->
	<link rel = "icon" href = "C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\AL-JABR.png" type = "image/x-icon">
</head>	
<style>
	#logo{
		float: left;
		position: relative;
		left: 20px;
		bottom: 150px;
		z-index: 3;
	}
	#al-Jabr{
		float: right;
		position: relative;
		right: 20px;
		bottom: 150px;
		z-index: 3;
	}
	#copyright{
		float: left;
		position: relative;
		bottom: 130px;
		left: 20px;
	}
	div#heading{  
		background: -webkit-repeating-linear-gradient(90deg, rgb(171,199,255), rgb(28,142,255));
		text-align: center;
		font-style: bold;
		width: 100%;
		height: 150px;
		float: top;
		position: fixed;
		z-index: 1;
	}
	div#tabs{
		background: -webkit-repeating-linear-gradient(90deg, rgb(28,142,255), rgb(171,199,255));
		float: right;
		text-align: justify-all;
		width: 100%;
		height: 30px;
		position: fixed;
		bottom: 470px;
		z-index: 2;
	}
	div#home1{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: visible;
	}
	div#home2{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: hidden;
	}
	div#home3{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: hidden;
	}
	div#home4{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: hidden;
	}
	div#home5{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: hidden;
	}
	div#home6{
		text-align: center;
		content: hidden;
		position: absolute;
		border: 3px black dotted;
		background-color: rgba(255, 140, 25, 0.7);
		float: center;
		left: 60px;
		height: 380px;
		width: 80%;
		padding: 10px 10px 10px 10px;
		margin: 30px 30px 30px 30px;
		overflow: none;
		visibility: hidden;
	}
	table.tabs{
		margin-left: 300px;
		width: 50% ;
		text-align: center;
	}
	button{
		display: inline-block;
		background-color: rgba(0,0,0,0);
		border: none;
		font-family: 'Calibri', sans-serif;
		font-size: 16px;
	}
	a{
		color: black;
		text-decoration: none;
	}
	body{
		background: url(http://3.bp.blogspot.com/-LNxhZUv3y2Q/VXZX85CTe0I/AAAAAAAAAJ0/ZATqumzB2ew/s320/fundo-twitter-matematica.jpg);
		overflow: hidden;
	}
	.main-title{
		font-size: 63px;
		font-family: 'Algerian', cursive;
		color: rgb(173,54,78);
		text-shadow:  4px 4px black;
		text-decoration: underline;
		float: right;
		position: relative;
		right: 450px;
	}
	.main-subtitle{
		font-family: 'Lucida Handwriting';
		font-style: italic;
		font-size: 18px;
		float: left;
		position: relative;
		left: 160px;
	}
	img.index{
		float: right;
		position: relative;
	}
	div#contents{
		columns: 250px 2;
		background-color: rgba(255, 255, 255, 0.5);
		visibility: hidden;
		position: relative;
	}
	h3{
		text-align: center;
		font-family: 'Bahnschrift', monospace;
		font-style: italic;
	}
	li{
		font-family: 'Arial', sans-serif;
		font-size: 16px;
		text-shadow: 0.25px 0.25px;
	}
	span#highlighting{
		font-weight: 600;
	}
	#header1{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: visible;
	}
	#header2{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: hidden;
	}
	#header3{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: hidden;
	}
	#header4{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: hidden;
	}
	#header5{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: hidden;
	}
	#header6{
		font-family: 'Berlin Sans FB', sans-serif;
		visibility: hidden;
	}
	#paragraph1{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: visible;
	}
	#paragraph2{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph3{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph4{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph5{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph6{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph1list{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: visible;
	}
	#paragraph2list{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#paragraph3list{
		font-family: 'Garamond', serif;
		text-align: left;
		visibility: hidden;
	}
	#Inicio{
		text-decoration: underline;
	}
	#Lecciones{
		text-decoration: none;
	}
	#ENTRY1{
		bottom: 120px;
	}
	#ENTRY3{
		bottom: 140px;
	}
	#ENTRY5{
		bottom: 135px;
	}
	#ENTRY7{
		bottom: 160px;
	}
	#ENTRY9{
		bottom: 150px;
	}
	#ENTRY11{
		bottom: 140px;
	}
	#ENTRY2{
		bottom: 155px;
		right: 10px;
	}
	#ENTRY4{
		bottom: 100px;
		right: 130px;
	}
	#ENTRY6{
		bottom: 170px;
		right: 10px;
	}
	#ENTRY8{
		bottom: 130px;
		right: 10px;
	}
	#ENTRY10{
		bottom: 130px;
		right: 10px;
	}
	#ENTRY12{
		bottom: 140px;
		right: 10px;
	}
	#intro1{
		float: right;
		position: relative;
		top: -165px;
	}
	#intro2{
		float: right;
		position: relative;
		top: -165px;
	}
	#intro3{
		float: right;
		position: relative;
		top: -165px;
	}
	#intro4{
		float: right;
		position: relative;
		top: 50px;
	}
	#intro4-1{
		float: left;
		position: relative;
		top: 50px;
	}
	#intro5{
		float: right;
		position: relative;
		bottom: 10px;
	}
	#transition1{
		border: 2px dashed;
		font-family: sans-serif;
		font-size: 18px;
		font-weight: 600;
		float: bottom;
		position: relative;
		left: 200px;
		visibility: visible;
	}
	#transition2{
		border: 2px dashed;
		font-family: sans-serif;
		font-size: 18px;
		font-weight: 600;
		float: bottom;
		position: relative;
		left: 200px;
		visibility: hidden;
	}
	#transition3{
		border: 2px dashed;
		font-family: sans-serif;
		font-size: 18px;
		font-weight: 600;
		float: bottom;
		position: relative;
		left: 200px;
		bottom: 50px;
		visibility: hidden;
	}
	#transition4{
		border: 2px dashed;
		font-family: sans-serif;
		font-size: 18px;
		font-weight: 600;
		float: bottom;
		position: relative;
		top: 40px;
		left: 150px;
		visibility: hidden;
	}
	#transition5{
		border: 2px dashed;
		font-family: sans-serif;
		font-size: 18px;
		font-weight: 600;
		float: bottom;
		position: relative;
		top: 40px;
		left: 150px;
		visibility: hidden;
	}
</style>
<script>
	function link2WasClicked(event){
		document.getElementById("contents").style.visibility = "visible"
		document.getElementById("body").style.overflow = "visible"
		document.getElementById("home1").style.visibility = "hidden"
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "hidden"
		document.getElementById("paragraph2").style.visibility = "hidden"
		document.getElementById("paragraph2list").style.visibility = "hidden"
		document.getElementById("transition2").style.visibility = "hidden"
		document.getElementById("header3").style.visibility = "hidden"
		document.getElementById("paragraph3").style.visibility = "hidden"
		document.getElementById("paragraph3list").style.visibility = "hidden"
		document.getElementById("transition3").style.visibility = "hidden"
		document.getElementById("header4").style.visibility = "hidden"
		document.getElementById("paragraph4").style.visibility = "hidden"
		document.getElementById("transition4").style.visibility = "hidden"
		document.getElementById("header5").style.visibility = "hidden"
		document.getElementById("paragraph5").style.visibility = "hidden"
		document.getElementById("transition5").style.visibility = "hidden"
		document.getElementById("header6").style.visibility = "hidden"
		document.getElementById("paragraph6").style.visibility = "hidden"
		document.getElementById("Lecciones").style.textDecoration = "underline"
		document.getElementById("Inicio").style.textDecoration = "none"
	}
	function transition1(event){
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "visible"
		document.getElementById("paragraph2").style.visibility = "visible"
		document.getElementById("paragraph2list").style.visibility = "visible"
		document.getElementById("transition2").style.visibility = "visible"
	}
	function transition2(event){
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "hidden"
		document.getElementById("paragraph2").style.visibility = "hidden"
		document.getElementById("paragraph2list").style.visibility = "hidden"
		document.getElementById("transition2").style.visibility = "hidden"
		document.getElementById("header3").style.visibility = "visible"
		document.getElementById("paragraph3").style.visibility = "visible"
		document.getElementById("paragraph3list").style.visibility = "visible"
		document.getElementById("transition3").style.visibility = "visible"
	}
	function transition3(event){
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "hidden"
		document.getElementById("paragraph2").style.visibility = "hidden"
		document.getElementById("paragraph2list").style.visibility = "hidden"
		document.getElementById("transition2").style.visibility = "hidden"
		document.getElementById("header3").style.visibility = "hidden"
		document.getElementById("paragraph3").style.visibility = "hidden"
		document.getElementById("paragraph3list").style.visibility = "hidden"
		document.getElementById("transition3").style.visibility = "hidden"
		document.getElementById("header4").style.visibility = "visible"
		document.getElementById("paragraph4").style.visibility = "visible"
		document.getElementById("transition4").style.visibility = "visible"
	}
	function transition4(event){
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "hidden"
		document.getElementById("paragraph2").style.visibility = "hidden"
		document.getElementById("paragraph2list").style.visibility = "hidden"
		document.getElementById("transition2").style.visibility = "hidden"
		document.getElementById("header3").style.visibility = "hidden"
		document.getElementById("paragraph3").style.visibility = "hidden"
		document.getElementById("paragraph3list").style.visibility = "hidden"
		document.getElementById("transition3").style.visibility = "hidden"
		document.getElementById("header4").style.visibility = "hidden"
		document.getElementById("paragraph4").style.visibility = "hidden"
		document.getElementById("transition4").style.visibility = "hidden"
		document.getElementById("header5").style.visibility = "visible"
		document.getElementById("paragraph5").style.visibility = "visible"
		document.getElementById("transition5").style.visibility = "visible"
	}
	function transition5(event){
		document.getElementById("header1").style.visibility = "hidden"
		document.getElementById("paragraph1").style.visibility = "hidden"
		document.getElementById("paragraph1list").style.visibility = "hidden"
		document.getElementById("transition1").style.visibility = "hidden"
		document.getElementById("header2").style.visibility = "hidden"
		document.getElementById("paragraph2").style.visibility = "hidden"
		document.getElementById("paragraph2list").style.visibility = "hidden"
		document.getElementById("transition2").style.visibility = "hidden"
		document.getElementById("header3").style.visibility = "hidden"
		document.getElementById("paragraph3").style.visibility = "hidden"
		document.getElementById("paragraph3list").style.visibility = "hidden"
		document.getElementById("transition3").style.visibility = "hidden"
		document.getElementById("header4").style.visibility = "hidden"
		document.getElementById("paragraph4").style.visibility = "hidden"
		document.getElementById("transition4").style.visibility = "hidden"
		document.getElementById("header5").style.visibility = "hidden"
		document.getElementById("paragraph5").style.visibility = "hidden"
		document.getElementById("transition5").style.visibility = "hidden"
		document.getElementById("header6").style.visibility = "visible"
		document.getElementById("paragraph6").style.visibility = "visible"
	}
</script>
<body id="body">
	<div id="heading">
		<h1 class="main-title"> Álgebra básica </h1>
		<h2 class="main-subtitle"> Azeri<dfn><abbr title="Science Technology Engineering Maths">STEM</abbr></dfn> <sub> © </sub> </h2>
 	</div>
 	<br>
 	<br> 
 	<br>
 	<br>
 	<br>
 	<br>
 	<br>
 	<br>
 	<br>
 	<br> 
 	<br>
 	<div id="tabs">
 		<img id="logo" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\LOGO.png" alt="Logotipo de AzeriSTEM" width="10%">
 		<img id="al-Jabr" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\AL-JABR.png" alt="al-Jabr, mascota del Álgebra" width="15%">
 		<table class="tabs">
 			<thead>
 				<td>
 					<th><button> <a id="Inicio" href=""> Inicio </a> </button></th>
 					<th><button> <a id="Lecciones" onclick="link2WasClicked(event)"> Lecciones </a> </button></th>
 					<th><button> <a id="Vídeos"> Vídeos </a> </button></th>
 					<th><button> <a id="Exámenes"> Exámenes </a> </button> </th>
 					<th><button> <a id="Contáctanos"> Contáctanos </a> </button></th>
 				</td>
 			</thead>
 		</table>
 		<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img id="Copyright" alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"></a><br>.
 	</div>
 	<div id="home1">
 		<h1 id="header1"> Te damos la bienvenida al mundo del álgebra </h1>
 		<div id="paragraph1">
 		<p> <span id="highlighting"> Al-Khwarizmi </span>, considerado el padre del <span id="highlighting">álgebra </span> (al-Jabr), fue el precusor del libro <span id="highlighting"> "Hisab al-Jabr w'al-Muqabala" </span>, en el cual nos presentan los <span id="highlighting"> números arábigos </span> y el sistema de base 10 que utilizamos hoy en día como una herrramienta para resolver los problemas más cotidianos de la vida y el uso de las palabras para nombrar las variables desconocidas </p>
 		<p> Su metodología permitió por primera vez en la historia resolver ecuaciones de primer y segundo grado por medio del <span id="highlighting"> equilibrio </span> (al-Muqabala), método que se utiliza hoy en día </p>
 		<p> En este curso de <span id="highlighting"> Álgebra Básica </span> aprenderás a: </p>
 		<ul id="paragraph1list">
 			<li> Realizar operaciones aritméticas de forma rápida y concisa </li>
 			<li> Expresarte en lenguaje algebraico </li>
 			<li> Resolver igualdades y desigualdades entre dos enunciados </li>
 			<li> Resolver dos o más problemas entrelazados en sí </li>
 			<li> Utilizar el algoritmo computacional </li>
 			<li> Comprender conceptos básicos de geometría analítica </li>
 		</ul>
 		<img id="intro1" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 1.jpg" alt="ENTRY 1" width="25%">  
 	</div>
 	<button> <a id="transition1" onclick="transition1(event)"> --> </a> </button>
 	</div>
 	<div id="home2">
 		<h1 id="header2"> Bloque 1: Aritmética </h1>
 		<div id="paragraph2">
 		<p> Bien, para dominar álgebra tenemos que dominar primero el <span id="highlighting"> cálculo aritmético </span>, desde primero de primaria hasta cuarto de secundaria. Se impartirá sobe todo en la primera y la cuarta unidad, aunque también en la tercera y la sexta. Si no te sientes listo, tenemos una serie de ejercicios que pondrán a prueba tu <span id="highlighting"> agilidad cerebral </span> (MUY IMPORTANTE); te vendrá de maravilla para estimular el córtex prefrontal
 		<p> Las siete <span id="highlighting"> operaciones aritméticas </span> que se imparten son las siguientes: </p>
 		<ul id="paragraph2list">
 			<li> Adición </li>
 			<li> Sustracción </li>
 			<li> Multiplicación </li>
 			<li> División</li>
 			<li> Potencia </li>
 			<li> Raíz </li>
 			<li> Logaritmo </li>
 		</ul>
 		<img id="intro2" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\BLOQUE1.jpg" alt="ENTRY 1" width="25%">  
 	</div>
 	<button> <a id="transition2" onclick="transition2(event)"> --> </a> </button>
 	</div>
 	<div id="home3">
 		<h1 id="header3"> Bloque 2: Procedimientos </h1>
 		<div id="paragraph3">
 		<p> Ofrecemos un montonazo de ejercicios para ti para que puedas practicar esas <span id="highlighting"> ecuaciones y sistemas </span>, porque recuerda, si no te sabes la teoría, luego no podrás aplicar dicho conocimiento. Nuestro catálogo incluye <span id="highlighting"> desde 1ºESO hasta 2ºBachillerato </span>, así que seas nuevo o seas calculín, este lugar es para ti. Os lo explicaremos como tu lengua materna </p>
 		<p> Os enseñaremos todos los <span id="highlighting"> métodos </span> posibles. Tú decidirás la dificultad del problema, y utilizarás las herramientas que te vengan en gana </p>
 		<p> Los más populares y los que darás son: </p>
 		<ul id="paragraph3list">
 			<li> Regla al-Muqabala </li>
 			<li> Fórmula de Cardano-Vieta </li>
 			<li> Regla de Ruffini </li>
 			<li> Cambio de base o variable </li>
 			<li> Tomar logaritmos </li>
 			<li> Método de Gauss </li>
 			<li> Matrices </li>
 		</ul>
 		<img id="intro3" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\BLOQUE2.jpg" alt="ENTRY 1" width="25%">  
 	</div>
 	<button> <a id="transition3" onclick="transition3(event)"> --> </a> </button>
 	</div>
 	<div id="home4">
 		<h1 id="header4"> Bloque 3: Uso de las TIC </h1>
 		<div id="paragraph4">
 		<p> Vivimos en un mundo globalizado en el que se sustituyen los métodos tradicionales por el uso de <span id="highlighting"> las nuevas tecnologías de la información y comunicación </span>. Nosotros no somos ninguna excepción, y aplicaremos algunos problemas con el programa <span id="highlighting"> GeoGebra </span>, es un software gratuito  además muy utilizado. </p>
 		<p> Por otra parte, en el tema de Matrices, podrás disfrutar de una pequeña sección del <span id="highlighting"> Álgebra computacional </span>, en el cual aplicaremos los conocimientos aprendidos a la resolución de problemas compatibles con matrices por el lenguaje de programación <span id="highlighting"> JavaScript </span> </p>
 		<img id="intro4" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\BLOQUE3.png" alt="ENTRY 1" width="30%">  
 		<img id="intro4-1" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\BLOQUE3.jpg" alt="ENTRY 1" width="30%">  
 	</div>
 	<button> <a id="transition4" onclick="transition4(event)"> --> </a> </button>
 	</div>
 	<div id="home5">
 		<h1 id="header5"> Bloque 4: Resolución de problemas </h1>
 		<div id="paragraph5">
 		<p> Profesor, <span id="highlighting">  ¿y esto para qué sirve en la vida real? </span> ¿Saben cómo los profesores odian esta pregunta? ¿A que no preguntáis para qué sirve chutar un balón? Lo chutáis, jugáis al fútbol y ya está. Pues esta sección está especialmente dedicada a aquellos que una vez ya teniendo el conocimiento suficiente, quieran resolver problemas en la vida real. </p>
 		<p> En especial, disfrutarás de una pequeña sección de <span id="highlighting"> Geometría Analítica </span>y de <span id="highlighting"> Álgebra Lineal </span> en las últimas cuatro unidades, y verás las <span id="highlighting"> aplicaciones del Álgebra </span> en distintos campos </p>
 		<p> Esta sección es la práctica de todas, y requiere conocimientos previos de geometría que también impartiremos aplicado a nuestro curso. Requiere también el uso de la lógica y la comprensión el enunciado </p>
 		<img id="intro5" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\BLOQUE4.jpg" alt="ENTRY 1" width="25%">  
 	</div>
 	<button> <a id="transition5" onclick="transition5(event)"> --> </a> </button>
 	</div>
 	<div id="home6">
 		<h1 id="header6"> Espero me dejes enseñarte álgebra </h1>
 		<div id="paragraph6">
 		<p> Aprende lo que necesites en la sección <strong> Lecciones </strong> </p>
 		<p> Si necesitas contenido audiovisual, busca algún <strong> Vídeos </strong> que te sirva de refuerzo </p>
 		<p> Ofrecemos también ejemplos de <strong> Exámenes </strong> e incluso una certificación de completar el curso </p>
 		<p> Cualquier duda <strong> Contáctanos </strong> </p>
 		<p> Uy, mis modales. Soy <a href="https://www.instagram.com/zorrozoaga/" target="_blank"> <span id="highlighting"> Zorrozoaga </span> </a>, y me dedico a los estudios del campo STEM. ¿Más información?, sígueme en <a href="https://www.instagram.com/azeri_stem/" target="_blank"> <span id="highlighting"> AzeriSTEM </span> </a>
 	</div>
 	</div>
 	<div id="contents">
 		<a href="ÁLGEBRA BÁSICA UNIDAD1.HTML"> <h3> <ins> Unidad 1: </ins> El lenguaje algebraico </h3> </a>
 		 <ol>
 			<li> Expresiones algebraicas </li>
 			<li> Monomios y polinomios </li>
 			<li> Potencias y propiedades </li>
 			<li> Producto y cociente de polinomios </li>
 			<li> Identidades notables y binomio de Newton </li>
 			<li> Brain Training: Agilidad aritmética </li>
 		</ol>
 			<img class="index" id="ENTRY1" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 1.jpg" alt="ENTRY 1" width="25%">
 		<h3> <ins> Unidad 3: </ins> La ecuación cuadrática </h3>
 		<ol>
 			<li> La raíz cuadrada </li>
 			<li> Fórmula de Cardano-Vieta (ax<sup>2</sup>+bx+c) </li>
 			<li> Ecuaciones cuadráticas del tipo ax<sup>2</sup>+c </li>
 			<li> Ecuaciones cuadráticas del tipo ax<sup>2</sup>+bx </li>
 			<li> Representación de la parábola (GeoGebra) </li>
 			<li> Resolución de problemas </li>
 		</ol>
 			<img class="index" id="ENTRY3" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 3.jpg" alt="ENTRY 3" width="20%">
 		<h3> <ins> Unidad 5: </ins> Divisibilidad </h3>
 		<ol>
 			<li> La regla de Ruffini </li>
 			<li> Teorema del resto y del factor </li>
 			<li> Factorización </li>
 			<li> Mínimo común múltiplo y máximo común divisor </li>
 			<li> Fracciones algebraicas </li>
 			<li> Descomposición de fracciones algebraicas </li>
 		</ol>
 			<img class="index" id="ENTRY5" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 5.jpg" alt="ENTRY 5" width="30%"> 	
 		<h3> <ins> Unidad 7: </ins> Inecuaciones </h3>	
 		<ol class="contents">
 			<li> Inecuación lineal </li>
 			<li> Inecuación de grado superior </li>
 			<li> Dominio de funciones </li>
 			<li> Otras inecuaciones de una incógnita </li>
 			<li> Inecuaciones de dos incógnitas </li>
 			<li> Sistemas de inecuaciones de una incógnita </li>
 			<li> Sistemas de inecuaciones de dos incógnitas </li>
 			<li> Programación lineal </li>
 			<li> TIC: GeoGebra </li>
 		</ol>
 			<img class="index" id="ENTRY7" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 7.jpg" alt="ENTRY 7" width="30%">
 		<h3> <ins> Unidad 9: </ins> Trigonometría </h3>
 		<ol>
 			<li> La circunferencia goniométrica </li>
 			<li> Razones trigonométricas </li>
 			<li> Relación fundamental de la trigonometría </li>
 			<li> Razones trigonométricas de la suma y diferencia de ángulos </li>
 			<li> Razones trigonométricas del ángulo doble y mitad </li>
 			<li> Transformación de sumas en productos </li>
 			<li> Teorema del seno y del coseno </li>
 			<li> Problemas de geometría </li>
 			<li> Ecuaciones trigonométricas </li>
 			<li> Sistemas de ecuaciones trigonométricas </li>
 		</ol>
 			<img class="index" id="ENTRY9" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 9.jpg" alt="ENTRY 9" width="30%">
 		<h3> <ins> Unidad 11: </ins> Álgebra lineal en R<sub>2</sub> </h3>
 		<ol>
 			<li> Vectores. Combinación y dependencia lineal </li>
 			<li> Producto escalar  </li>
 			<li> Ecuaciones de la recta </li>
 			<li> Posiciones relativas de las rectas </li>
 			<li> Distancia entre un punto y una recta </li>
 			<li> Distancia entre dos rectas paralelas </li>
 			<li> Bisectriz entre dos rectas </li>
 			<li> Transformaciones lineales </li>
 			<li> TIC: GeoGebra </li>
 		</ol>
 			<img class="index" id="ENTRY11" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 11.png" alt="ENTRY 11" width="32%">
 		<br>
 		<br>
 		<br>
 		<br>
 		<br>
 		<br>
 		<h3> <ins> Unidad 2: </ins> La ecuación lineal </h3>
 		<ol>
 			<li> La regla al-Muqabala </li>
 			<li> Ecuaciones con coeficientes fraccionarios </li>
 			<li> Ecuaciones con paréntesis </li>
 			<li> Sistemas de ecuaciones lineales: Método de sustitución </li>
 			<li> Sistemas de ecuaciones lineales: Método de igualación </li>
 			<li> Sistemas de ecuaciones lineales: Método de reducción </li>
 			<li> Sistemas de ecuaciones lineales: Método de Gauss </li>
 			<li> Representación de la función lineal (GeoGebra) </li>
 			<li> Resolución de problemas </li>
 		</ol>
 			<img class="index" id="ENTRY2" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 2.jpg" alt="ENTRY 2" width="25%">
 		<h3> <ins> Unidad 4: </ins> Sucesiones y series sigma </h3>
 		 <ol>
 		 	<li> Sucesiones aritméticas </li>
 			<li> Sucesiones geométricas </li>
 			<li> Notación sigma parcial </li>
 			<li> Series geométricas infinitas </li>
 			<li> Brain Training: Suma y sigue </li>
 		</ol>
 			<img class="index" id="ENTRY4" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 4.jpg" alt="ENTRY 4" width="22%">
 		<h3> <ins> Unidad 6: </ins> Otras ecuaciones </h3>
 		<ol>
 			<li> Ecuación de grado superior </li>
 			<li> Ecuación bicuadrada </li>
 			<li> Ecuaciones racionales </li>
 			<li> Radicales y propiedades </li>
 			<li> Racionalización </li>
 			<li> Ecuaciones irracionales </li>
 			<li> Logaritmos y propiedades </li>
 			<li> Ecuaciones logarítmicas </li>
 			<li> Ecuaciones exponenciales: cambio de base o variable </li>
 			<li> Ecuaciones exponenciales: tomar logaritmos </li>
 			<li> Brain Training: Agilidad aritmética </li>
 		</ol>
 			<img class="index" id="ENTRY6" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 6.jpg" alt="ENTRY 6" width="30%">
 		<h3> <ins> Unidad 8: </ins> Matrices </h3>
 	    <ol>
 			<li> Matrices. Operaciones en renglones </li>
 			<li> Resolución de sistemas lineales por matrices identidad </li>
 			<li> Operaciones con matrices </li>
 			<li> Determinantes </li>
 			<li> Matriz inversa </li>
 			<li> Resolución de sistemas lineales por matrices inversas </li>
 			<li> TIC: JavaScript </li>
 		</ol>
 			<img class="index" id="ENTRY8" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 8.jpg" alt="ENTRY 8" width="25%">
 	    <h3> <ins> Unidad 10: </ins> Los números complejos </h3>
 		<ol>
 			<li> El plano complejo. Representación vectorial </li>
 			<li> Forma binómica, polar y trigonométrica </li>
 			<li> Operaciones con números complejos </li>
 			<li> Radicación de números complejos </li>
 			<li> Fórmula de Moivre </li>
 			<li> Teorema fundamental del álgebra </li>
 			<li> TIC: GeoGebra </li>
 		</ol>
 			<img class="index" id="ENTRY10" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 10.jpg" alt="ENTRY 10" width="25%">
 		<h3> <ins> Unidad 12: </ins> Álgebra lineal en R<sub>3</sub> </h3>
 		<ol>
 			<li> Producto vectorial </li>
 			<li> Ecuaciones del plano </li>
 			<li> Ángulos entre rectas y planos </li>
 			<li> Posiciones relativas de las rectas </li>
 			<li> Puntos simétricos </li>
 			<li> Distancia de un punto a una recta </li>
 			<li> Distancia de una recta a un plano </li>
 			<li> Distancia de un punto a un plano </li>
 			<li> Distancia de dos rectas que se cruzan </li>
 			<li> Distancia entre dos planos o rectas paralelos </li>
 			<li> TIC: GeoGebra </li>
 		</ol>
 			<img class="index" id="ENTRY12" src="C:\Users\pedro_\Desktop\Programming\ÁLGEBRA BÁSICA\IMG\ENTRY 12.jpg" alt="ENTRY 12" width="30%">
 	</div>
</body>
</div>
</html>
