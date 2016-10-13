//variable usada para saber en que idioma esta
var idioma = "espanol";

/**
 * funcion que realiza al cargar la pagina
 */
window.onload = function() {
	mostrarImagen();
	
	//primero cargarmos el div que contiene el menu con este metodo
	if(idioma == "portugues"){
		document.getElementById("forMenu").innerHTML = varMenuPortugues();
	} else if(idioma == "ingles"){
		document.getElementById("forMenu").innerHTML = varMenuIngles();
	} else {
		document.getElementById("forMenu").innerHTML = varMenuEspanol();
	}
	
	//luego aplicamos las funciones para el menu
	paraMenu();
};

//variables para cargar el div para el menu
function varMenuEspanol(){
	var espanol  = '' 
	+ '<nav id="menu" class="left">'
	+ ' <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Inicio</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>Historia <i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="irA(true);return false;"><i class="fa fa-info-circle"></i>Recorrido RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Cambiar Idioma <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuIngles()">Inglés</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuPortugues()">Portugués</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contactános</a></li> '
	+ '	<li><a href="#" onclick="mostrarPaginaInstrucciones()"><i class="fa fa-info-circle"></i>Instrucciones</a></li> '
	+ '	<li><a href="#" onclick="mostrarAcercaDe()"><i class="fa fa-pencil-square-o"></i>Acerca de InfoTour</a></li> '
	+ ' </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
	return espanol;
}

function varMenuIngles(){
	var ingles = '' 
	+ '<nav id="menu" class="left">'
	+ ' <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Home</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>History<i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="irA(true);return false;"><i class="fa fa-info-circle"></i>Run RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Change language <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuEspanol()">Spanish</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuPortugues()">Portuguese</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contact</a></li> '
	+ '	<li><a href="#" onclick="mostrarPaginaInstrucciones()"><i class="fa fa-info-circle"></i>Instructions</a></li> '
	+ '	<li><a href="#" onclick="mostrarAcercaDe()"><i class="fa fa-pencil-square-o"></i>About InfoTour</a></li> '
	+ ' </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
	return ingles;
}

function varMenuPortugues(){
	var portugues  = '' 
	+ '<nav id="menu" class="left">'
	+ ' <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Principal</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>História <i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="irA(true);return false;"><i class="fa fa-info-circle"></i>Executar RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Mudar Língua <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuEspanol()">Espanhol</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuIngles()">Inglés</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contato</a></li> '
	+ '	<li><a href="#" onclick="mostrarPaginaInstrucciones()"><i class="fa fa-info-circle"></i>Instruções</a></li> '
	+ '	<li><a href="#" onclick="mostrarAcercaDe()"><i class="fa fa-pencil-square-o"></i>Sobre InfoTour</a></li> '
	+ ' </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
	return portugues;
}
	
//variables para el contenido de info
var jesus_esp = ''
				+ '<p style="text-align: justify;">'
				+ '	La Misión Jesuítica de Jesús de Tavarangüe es una de las reducciones que aún se conservan de entre numerosos '
				+ '	pueblos fundados por los misioneros jesuitas en el marco de su tarea colonizadora en América del Sur en el '
				+ '	siglo XVII. Está ubicada en el departamento de Itapúa  Paraguay, en la ciudad de Jesús. '
				+ ''
				+ '	Fue fundada en 1685, a orillas del río Monday por el jesuita Gerónimo Delfín, aunque el asentamiento tuvo '
				+ '	que mudarse varias veces por la hostilidad de los Brasileños que los atacaban y llevaban como esclavos, hasta '
				+ '	llegar a lo que hoy queda a 42.6 km. de la ciudad de Encarnación. Llegó a tener cerca de 3000 hectáreas para 1750. ' 
				+ ''
				+ '	En esta misión se comenzó a construir una de las iglesias más grandes de la época, que tuvo que dejarse sin concluir '
				+ '	por la expulsión de los jesuitas en 1768 por parte de Carlos III de España.'
				+ ''
				+ '	Las ruinas de estas misiones religiosas reflejan una forma de vida y de educación marcadas por un estilo singular. '
				+ '</p>';
var jesus_ing = ''
				+ '<p style="text-align: justify;">'
				+ '	The Ruins of Jesús from Tavarangüe is one of the reductions that is still preserved in the tows founded '
				+ '	by Jesuit Missionaries in their task of colonizing South America in the century XVII. It is located in '
				+ '	the department of Itapúa - Paraguay, in the city of Jesus.'
				+ '	It was founded in 1685, along the River Monday by the Jesuit Geronimo Delfin, although the settlement '
				+ '	had moved several time for the Brazilian hostility that attacked and carried as slaves, to arrive as '
				+ '	today is at 42.6 kilometers from Encarnacion City. It has got as 3000 hectares to 1750.'
				+ ''
				+ '	In this mission they started to build one of the biggest church of the time, that has stayed unfinished '
				+ '	for the expulsion of the Jesuits in 1768 for Carlos III from Spain.'
				+ '	'
				+ '	The Ruins of these Religious Missions reflect a way of life and education characterized for a singular style.'
				+ '</p>';
var jesus_por = ''
				+ '<p style="text-align: justify;">'
				+ '	A Missão Jesuítica de Jesus de Tavarangüe é uma das reduções que ainda se conserva de entre muitos povos fundados '
				+ '	pelos missionários jesuítas fazendo sua tarefa de colonizar América do sul no século XVII. '
				+ '	Fica no departamento de Itapúa - Paraguai, na cidade de Jesus. '
				+ ''
				+ '	Foi Fundado em 1685, na orilha do rio Monday pelo jesuíta Gerónimo Delfín, o assentamento muda-se varias vezes '
				+ '	pela hostilidade dos brasileiros que os atacavam e os levavam como escravos, assim até como fica hoje. '
				+ '	Fica 42,6km da cidade de Encarnación e chegou a ter perto de 3000 hectares em 1750. '
				+ ''
				+ '	Nesta missão se fez uma das igrejas maiores da época, mas ficou-se sem finalizar pela expulsão dos jesuítas em 1768 '
				+ '	pelo Carlos III da Espanha. '
				+ ''
				+ '	As ruínas destas missões religiosas mostram uma forma de vida e educação marcadas por um estilo singular.'
				+ '</p>';
				
var trinidad_esp = ''
					+ '<p style="text-align: justify;">'
					+ '	Esta Misión Jesuítica fue fundada en 1.706 en el actual territorio Argentino, para luego trasladarse en 1712  al lugar '
					+ '	que ocupa actualmente.'
					+ '	Su fundador fue el sacerdote jesuita Juan de Anaya y el diseñador de la obra fue el hermano jesuita Juan Bautista '
					+ '	Primoli.'
					+ '</p>';
var trinidad_ing = ''
					+ '<p style="text-align: justify;">'
					+ '	This mission was founded in 1706 in the present Argentine territory, and then move in 1712 to the present '
					+ '	place.'
					+ '	Its founder was the Jesuit priest Juan of Anaya and the designer of the work was the Jesuit Brother '
					+ '	Juan Bautista Primoli.'
					+ '</p>';
var trinidad_por = ''
					+ '<p style="text-align: justify;">'
					+ '	Esta missão Jesuítica foi fundada em 1706 na Argentina, mas depois se translado em 1712 no prédio onde fica na atualidade.'
					+ '	O seu fundador foi o sacerdote jesuíta Juan de Anaya e o desdenhador da obra foi o irmão jesuíta Juan Bautista Primoli.'
					+ '</p>';
					
var contenido_instrucciones_esp = ''
					+ '<p style="text-align: justify;">'
					+ 'Solo debes de hacer click en el menu y click en "Recorrido RA" para empezar '
					+ 'tu recorrido. Apunta la camara de tu celular y la aplicación te mostrará los '
					+ 'puntos de interés(POI). Al hacer click en cualquier POI aparecerá una ventana '
					+ 'emergente con la descripción del POI seleccionado. Al click en la ventana emergente '
					+ 'podrás escuchar la descripción.'
					+ ''
					+ 'Para un mejor recorrido recuerda: activar tu giroscopio, activar tu GPS y contar '
					+ 'con conexión a internet a una buena velocidad, si no lo tienes debes de esperar '
					+ 'a que la app cargue todos los puntos en el radar antes de iniciar el recorrido.'
					+ '</p>';
var contenido_instrucciones_ing = ''
					+ '<p style="text-align: justify;">'
					+ 'You just have to click on the menu and click on "Run RA" to start '
					+ 'your tour. He points the camera of your phone and the application will show the '
					+ 'Points of Interest (POI). Clicking on any POI a window appears '
					+ 'popup with the description of the selected POI. By clicking on the popup '
					+ 'You can hear the description. '
					+ ''
					+ 'For best route recalls activate your gyroscope, GPS and activate your count '
					+ 'internet with a good speed, you should wait to load all the points on the radar before starting the tour. '
					+ '</p>';
var contenido_instrucciones_por = ''
					+ '<p style="text-align: justify;">'
					+ 'Você apenas tem que clicar no menu e clique em "Executar RA" para iniciar '
					+ 'sua turnê. Ele aponta a câmera do seu telefone eo aplicativo irá mostrar o '
					+ 'Pontos de Interesse (POI). Clicando em qualquer POI aparece uma janela '
					+ 'popup com a descrição do POI seleccionado. Ao clicar no pop-up '
					+ 'Você pode ouvir a descrição. '
					+ ''
					+ 'Para melhores passeios ativar seu giroscópio, GPS e ativar sua conexão ao '
					+ 'Internet com uma velocidade boa, você deve esperar para carregar todos os pontos no radar antes de iniciar o passeio. '
					+ '</p>';
		

/**
 * Estas son las funciones del menu para que al hacer click realize las funciones
 */
function paraMenu(){
	$("#showmenu").click(function(e){
		e.preventDefault();
		$("#menu").toggleClass("show");
	});
	$("#menu a").click(function(event){
		event.preventDefault();
		if($(this).next('ul').length){
			$(this).next().toggle('fast');
			$(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
		}
	});
}

/**
 * Metodo que se usa para abrir una nueva pagina, es usada en el menu
 */
function openPage(page) {
	window.open(page,'window','params');
}

/**
 * Metodo que se usa al click click en portugues para cambiar el idioma del menu
 */
function cambiarMenuPortugues(){
	idioma = "portugues";
	document.getElementById("forMenu").innerHTML = varMenuPortugues();
	var titulo = document.getElementById("titulo");
	var contenidoJesus = document.getElementById("contenidoJesus");
	var contenidoTrinidad = document.getElementById("contenidoTrinidad");
	if(null != titulo){
		titulo.innerHTML = "<h1 style='text-align: center;'>Contato</h1></br></br></br>";
	}
	if(null != contenidoJesus){
		contenidoJesus.innerHTML = jesus_por;
	}
	if(null != contenidoTrinidad){
		contenidoTrinidad.innerHTML = trinidad_por;
	}
	$("#comienza").html("Inicia");
	$("#contenidoIntrucciones").html(contenido_instrucciones_por);
	$("#tu_recorrido").html("sua jornada");
	$("#titulo_contacto").html("Contatenos");
	$("#sub_titulo_contacto").html("Mande o seu message.");
	$("#boton_contacto").val("Envie seu mesage");
	$("#copyright").html("&copy; Todos os direitos reservados");
	$("#encuesta").html('<a href="http://es.surveymonkey.com/r/7WWHDPD"><i class="fa fa-pie-chart"></i> &nbsp; Conclui o enquete de InfoTour</a>');
	$("#link").html('<a href="#" onclick="irA(false);return false;" class="button style2">INICIAR TOUR</a>');
	paraMenu();
}

/**
 * Metodo que se usa al click click en espanol para cambiar el idioma del menu
 */
function cambiarMenuEspanol(){
	idioma = "espanol";
	document.getElementById("forMenu").innerHTML = varMenuEspanol();
	var titulo = document.getElementById("titulo");
	var contenidoJesus = document.getElementById("contenidoJesus");
	var contenidoTrinidad = document.getElementById("contenidoTrinidad");
	if(null != titulo){
		titulo.innerHTML = "<h1 style='text-align: center;'>Contacto</h1></br></br></br>";
	}
	if(null != contenidoJesus){
		contenidoJesus.innerHTML = jesus_esp;
	}
	if(null != contenidoTrinidad){
		contenidoTrinidad.innerHTML = trinidad_esp;
	}
	$("#comienza").html("Comienza");
	$("#contenidoIntrucciones").html(contenido_instrucciones_esp);
	$("#tu_recorrido").html("tu recorrido");
	$("#titulo_contacto").html("Contactenos");
	$("#sub_titulo_contacto").html("Envie su mensaje.");
	$("#boton_contacto").val("Envie su mensage");
	$("#copyright").html("&copy; Todos los derechos reservados");
	$("#encuesta").html('<a href="http://es.surveymonkey.com/r/7WWHDPD"><i class="fa fa-pie-chart"></i> &nbsp; Complete la encuesta sobre InfoTour</a>');
	$("#link").html('<a href="#" onclick="irA(false);return false;" class="button style2">INICIAR RECORRIDO</a>');
	paraMenu();
}

/**
 * Metodo que se usa al click click en ingles para cambiar el idioma del menu
 */
function cambiarMenuIngles(){
	idioma = "ingles";
	document.getElementById("forMenu").innerHTML = varMenuIngles();
	var titulo = document.getElementById("titulo");
	var contenidoJesus = document.getElementById("contenidoJesus");
	var contenidoTrinidad = document.getElementById("contenidoTrinidad");
	if(null != titulo){
		titulo.innerHTML = "<h1 style='text-align: center;'>Contact</h1></br></br></br>";
	}
	if(null != contenidoJesus){
		contenidoJesus.innerHTML = jesus_ing;
	}
	if(null != contenidoTrinidad){
		contenidoTrinidad.innerHTML = trinidad_ing;
	}
	$("#comienza").html("Start");
	$("#contenidoIntrucciones").html(contenido_instrucciones_ing);
	$("#tu_recorrido").html("your ride");
	$("#titulo_contacto").html("Contact us");
	$("#sub_titulo_contacto").html("Send your message.");
	$("#boton_contacto").val("Send your message");
	$("#copyright").html("&copy; All rights reserved");
	$("#encuesta").html('<a href="http://es.surveymonkey.com/r/7WWHDPD"><i class="fa fa-pie-chart"></i> &nbsp; Complete the survey about InfoTour</a>');
	$("#link").html('<a href="#" onclick="irA(false);return false;" class="button style2">START TOUR</a>');
	paraMenu();
}

/**
 * funcion para mostrar el div de contactos y ocultar el resto de los divs
 */
function mostrarPaginaContacto(){
	document.getElementById("index").style.display = 'none';
	document.getElementById("contacto").style.display = 'block';
	document.getElementById("historias").style.display = 'none';
	document.getElementById("historiaJesus").style.display = 'none';
	document.getElementById("historiaTrinidad").style.display = 'none';
	document.getElementById("instrucciones").style.display = 'none';
	$("#showmenu").click();
}

/**
 * funcion para mostrar el div de Index y ocultar el resto de los divs
 */
function mostrarPaginaIndex(){
	document.getElementById("index").style.display = 'block';
	document.getElementById("contacto").style.display = 'none';
	document.getElementById("historias").style.display = 'none';
	document.getElementById("historiaJesus").style.display = 'none';
	document.getElementById("historiaTrinidad").style.display = 'none';
	document.getElementById("instrucciones").style.display = 'none';
	$("#showmenu").click();
}

/**
 * funcion para mostrar el div de historiaJesus y ocultar el resto de los divs
 */
function mostrarPaginaHistoriaJesus(){
	document.getElementById("index").style.display = 'none';
	document.getElementById("contacto").style.display = 'none';
	document.getElementById("historias").style.display = 'block';
	document.getElementById("historiaJesus").style.display = 'block';
	document.getElementById("historiaTrinidad").style.display = 'none';
	document.getElementById("instrucciones").style.display = 'none';
	$("#showmenu").click();
}

/**
 * funcion para mostrar el div de historiaTrinidad y ocultar el resto de los divs
 */
function mostrarPaginaHistoriaTrinidad(){
	document.getElementById("index").style.display = 'none';
	document.getElementById("contacto").style.display = 'none';
	document.getElementById("historias").style.display = 'block';
	document.getElementById("historiaJesus").style.display = 'none';
	document.getElementById("historiaTrinidad").style.display = 'block';
	document.getElementById("instrucciones").style.display = 'none';
	$("#showmenu").click();
}

/**
 * funcion para mostrar el div de instrucciones y ocultar el resto de los divs
 */
function mostrarPaginaInstrucciones(){
	document.getElementById("index").style.display = 'none';
	document.getElementById("contacto").style.display = 'none';
	document.getElementById("historias").style.display = 'none';
	document.getElementById("historiaJesus").style.display = 'none';
	document.getElementById("historiaTrinidad").style.display = 'none';
	document.getElementById("instrucciones").style.display = 'block';
	$("#showmenu").click();
}

/**
 * funcion utilizada para redirigir la p�gina de acuerdo a si existe o no conexion a internet
 */
function irA(hacerclick){
 	var mensaje = "Cargando...";
 	if(idioma == "ingles"){
 		mensaje = "Loading...";
 	} else if(idioma == "portugues"){
 		mensaje = "Espere...";
 	}
	$.isLoading({ text: mensaje });
	if(hacerclick){
 		$("#showmenu").click(); 
 	}
	var conn = checkNetConnection();
	setTimeout( function(){ 
        $.isLoading( "hide" );
    }, 2000 );
    //verificamos si esta conectado a internet para establecer las variables
	if(conn == true) {
		if(idioma == "ingles"){
			openPage('metaioSDKAREL:///?startRecorridoID=Ingles');
		} else if(idioma == "portugues"){
			openPage('metaioSDKAREL:///?startRecorridoID=Portugues');
		} else {
	    	openPage('metaioSDKAREL:///?startRecorridoID=Espanhol');
		}
	} else {
		mostrarAlert();
	}
}

/**
 * funcion para comprobar coneccion a internet sacada de https://gist.github.com/SoldierCorp/5887679
 */
 function checkNetConnection(){
	 var conn = false;
	 $.ajax({
  			url: 'http://168.90.176.30/infotour/process.php',
  			async: false,
  			data: {'tag' : 'connection'}
  	 })
  	 .fail(function() { conn = false; })
  	 .done(function() { conn = true; });
  	 return conn;
}

/**
 * Funcion para mostrar cuando no existe conexion a internet
 */
 function mostrarAlert(){
 	var mensaje = "No tienes conexión a internet </br> Cierra la aplicación, conectate a internet y vuelve a abrir InfoTour.";
 	if(idioma == "ingles"){
 		mensaje = "Internet conection is down</br>Please, close the app, verify your conection and re-open InfoTour.";
 	} else if(idioma == "portugues"){
 		mensaje = "Vocé não tem coneção ao internet</br>Fecha a aplicação, verifique sua coneção e depois abra denovo InfoTour.";
 	}
 	
 	$.magnificPopup.open({
	  items: {
	    src: '<div class="white-popup">' + mensaje + '</div>',
	    type: 'inline'
	  },
	  closeBtnInside: true
	});
 }
 
 /**
 * Funcion para mostrar un alert con las informaciones de infotour
 */
 function mostrarAcercaDe(){
 	$("#showmenu").click();
 	var mensaje = ''
 				+ 'InfoTour es una aplicación(app) que utiliza la tecnología de Realidad Aumentada '
				+ 'con el cual se puede realizar el recorrido por las Reducciones Jesuíticas de '
				+ 'Jesus de Tavarangue y Santísima Trinidad. </br></br>'
				+ 'Esta app fue desarrollada usando el SDK de Metaio. </br>'
				+ 'Para saber los permisos otorgados por metaio consulte '	
				+ '<a href="http://www.metaio.com/legal.html">http://www.metaio.com/legal.html</a>.';
 	if(idioma == "ingles"){
 		mensaje = ''
 				+ 'InfoTour is an application (app) that uses Augmented Reality technology '
				+ 'with which you can make the tour of the Jesuit Reductions '
				+ 'Jesus of Tavarangue and Holy Trinity. </br></br>'
				+ 'This software has been developed using Metaio SDK </br>'
				+ 'For	more information regarding the permissible uses of the Metaio SDK, please refer to '	
				+ '<a href="http://www.metaio.com/legal.html">http://www.metaio.com/legal.html</a>.';
 	} else if(idioma == "portugues"){
 		mensaje = ''
 				+ 'InfoTour é uma aplicação (app) que utiliza a tecnologia de Realidade Aumentada '
				+ 'com o qual você pode fazer o passeio das Reduções Jesuíticas '
				+ 'Jesus de Tavarangue e da Santíssima Trindade. </br></br>'
				+ 'A app foi feita com o SDK de Metaio. </br>'
				+ 'Se deseja saber mais sobre os permisos de metaio visite '	
				+ '<a href="http://www.metaio.com/legal.html">http://www.metaio.com/legal.html</a>. </br>';
 	}
 	$.magnificPopup.open({
	  items: {
	    src: '<div class="white-popup">' + mensaje + '</div>',
	    type: 'inline'
	  },
	  closeBtnInside: true
	});
 }