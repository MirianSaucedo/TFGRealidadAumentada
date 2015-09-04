//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
setInterval('avanzaSlide()',5000);
 
//array con las clases para las diferentes imagenes
var arrayImagenes = new Array(".img1",".img2",".img3");
 
//variable que nos permitirá saber qué imagen se está mostrando
var contador = 0;
 
//hace un efecto fadeIn para mostrar una imagen
function mostrar(img){
	$(img).ready(function(){				
  		$(arrayImagenes[contador]).fadeIn(1500);		
	});
}
 
//hace un efecto fadeOut para ocultar una imagen
function ocultar(img){
	$(img).ready(function(){				
  		$(arrayImagenes[contador]).fadeOut(1500);		
	});
}
 
//función principal
function avanzaSlide(){
        //se oculta la imagen actual
	ocultar(arrayImagenes[contador]);
        //aumentamos el contador en una unidad
	contador = (contador + 1) % 3;
        //mostramos la nueva imagen
	mostrar(arrayImagenes[contador]);
}

//funcion para enviar mails
function enviarMail(){
	if($("#nombre").val().trim() === '' || $("#email").val().trim() === '' || $("#mensaje").val().trim() === ''){
		$.ClassyNotty({
			title : "ATENTION",
			content : "Complete los campos vacios </br> Fill the empty fields </br>  Complete os campos em branco",
			img : 'http://academico.fiuni.edu.py/infor/poiruinas/img/incorrecto.png',
			showTime: false
		});
	} else {
		$.ajax({
			  type: "POST",
			  url: "https://mandrillapp.com/api/1.0/messages/send.json",
			  data: {
			    'key': 'hDoJjlYotMuplxwFkJK1HQ',
			    'message': {
			      'from_email': $("#email").val(),
			      'to': [
			          {
			            'email': 'pedrodamiangv@gmail.com',
			            'name': 'Infotour',
			            'type': 'to'
			          },
			          {
			            'email': 'miriansau@gmail.com',
			            'name': 'Infotour',
			            'type': 'to'
			          },
			          {
			            'email': 'lizza.skr08@gmail.com',
			            'name': 'Infotour',
			            'type': 'to'
			          }
			        ],
			      'autotext': 'true',
			      'subject': $("#nombre").val(),
			      'html': $("#mensaje").val() + '</br> Enviado desde la app infotour!'
			    }
			  }
		 }).done(function(response) {
			  $("#nombre").val("");
			  $("#email").val("");
			  $("#mensaje").val("");
			  $.ClassyNotty({
					title : "ok!",
					content : "Te has contactado con nosotros, en breve responderemos tu email."
								+ "</br>  Your email was sent, we will reply in a moment."
								+ "</br>  Voce contacto com infotour, recibira uma resposta em breve.",
					img : 'http://academico.fiuni.edu.py/infor/poiruinas/img/correcto.png',
					showTime: false
			  }); 
		 }).fail(function(jqXHR, textStatus){
		 	$.ClassyNotty({
				title : "ATENTION",
				content : "Campos invalidos </br> Invalid fields </br>  Os campos nÃ£o som validos. </br> Error: " + jqXHR.responseText,
				img : 'http://academico.fiuni.edu.py/infor/poiruinas/img/incorrecto.png',
				showTime: false
			});
		 });
	}
}