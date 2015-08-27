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
	var recipient = 'pedrodamiangv@gmail.com',
     subject   = 'Hi',
     message  = 'Write the body of your message here';

	location.href = 'http://mail.google.com/mail/?view=cm&fs=1'+
                '&to=' + recipient +
                '&su=' + subject +
                '&body=' + message +
                '&ui=1';
                
     alert("Envio");
}

function enviarMail2(){
	var usuario = prompt('Introduce el usuario',' ');
	document.location="mailto:pedrodamiangv@gmail.com?subject="+usuario;
}