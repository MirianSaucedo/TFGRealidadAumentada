/**
 * funcion que realiza al cargar la pagina
 */
window.onload = function() {
	//primero cargarmos el div que contiene el menu con este metodo
	if(idioma == "portugues"){
		document.getElementById("forMenu").innerHTML = portugues;
	} else if(idioma == "ingles"){
		document.getElementById("forMenu").innerHTML = ingles;
	} else {
		document.getElementById("forMenu").innerHTML = espanol;
	}
	
	//luego aplicamos las funciones para el menu
	paraMenu();
};


//variable usada para saber en que idioma esta
var idioma = "espanol";

//variables para cargar el div para el menu
var espanol  = '' 
	+ '<nav id="menu" class="left">'
	+ '  <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Inicio</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>Historia <i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="metaioSDKExampleAREL:///?startTutorialID=RecorridoEspanhol" onclick="openPage(this.href);return false"><i class="fa fa-info-circle"></i>Recorrido RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Cambiar Idioma <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuIngles()">Inglés</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuPortugues()">Portugués</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contactános</a></li> '
	+ '  </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
var ingles = '' 
	+ '<nav id="menu" class="left">'
	+ '  <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Home</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>Historia <i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="metaioSDKExampleAREL:///?startTutorialID=RecorridoIngles" onclick="openPage(this.href);return false"><i class="fa fa-info-circle"></i>Run RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Change language <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuEspanol()">Spanish</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuPortugues()">Portuguese</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contact</a></li> '
	+ '  </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
var portugues  = '' 
	+ '<nav id="menu" class="left">'
	+ '  <ul> '
	+ '	<li><a href="#" onclick="mostrarPaginaIndex()"><i class="fa fa-home"></i>Principal</a></li> '
	+ '	<li><a href="#"><i class="fa fa-info-circle"></i>História <i class="fa fa-caret-down"></i></a> '
	+ '		<ul> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaJesus()">Jesús de Tavarangue</a></li> '
	+ '			<li><a href="#" onclick="mostrarPaginaHistoriaTrinidad()">Trinidad del Paraná</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="metaioSDKExampleAREL:///?startTutorialID=RecorridoPortugues" onclick="openPage(this.href);return false"><i class="fa fa-info-circle"></i>Recorrido RA</a></li> '
	+ '	<li> <a href="#"><i class="fa fa-laptop"></i>Mudar Língua <i class="fa fa-caret-down"></i></a> '
	+ '	   <ul> '
	+ '		<li><a href="#" onclick="cambiarMenuEspanol()">Espanhol</a></li> '
	+ '		<li><a href="#" onclick="cambiarMenuIngles()">Inglés</a></li> '
	+ '	  </ul> '
	+ '	</li> '
	+ '	<li><a href="#" onclick="mostrarPaginaContacto()"><i class="fa fa-phone"></i>Contato</a></li> '
	+ '  </ul> '
	+ '  <a href="#" id="showmenu"> <i class="fa fa-align-justify"></i> </a>  '
	+ '</nav> ';
	
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
				+ '	The Ruins of Jesús from Tavarangue is one of the reductions that is still preserved in the tows founded '
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
	document.getElementById("forMenu").innerHTML = portugues;
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
	paraMenu();
}

/**
 * Metodo que se usa al click click en espanol para cambiar el idioma del menu
 */
function cambiarMenuEspanol(){
	idioma = "espanol";
	document.getElementById("forMenu").innerHTML = espanol;
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
	paraMenu();
}

/**
 * Metodo que se usa al click click en ingles para cambiar el idioma del menu
 */
function cambiarMenuIngles(){
	idioma = "ingles";
	document.getElementById("forMenu").innerHTML = ingles;
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
	$("#showmenu").click();
}