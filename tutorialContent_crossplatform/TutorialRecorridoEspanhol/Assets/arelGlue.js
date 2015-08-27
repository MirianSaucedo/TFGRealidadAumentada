arel.sceneReady(function()
{
	console.log("sceneReady");
	
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	arel.Scene.setPickingSoundEnabled(true);
	//arel.Scene.shareScreenshot(true);
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	
	$('#GPSBtn').click(function(){arel.Scene.switchChannel(123456);});
	
	arel.Scene.getLocation(function(location){
		var jesus = new arel.LLA(-27.053866,-55.75255, 0);
		var distanciaJesus = arel.Util.getDistanceBetweenLocationsInMeter(location, jesus);
		var trinidad = new arel.LLA(-27.129306,-55.701333, 0);
		var distanciaTrinidad = arel.Util.getDistanceBetweenLocationsInMeter(location, trinidad);
		if(distanciaJesus < 5000 || distanciaTrinidad < 5000){
			var newUrl = "http://www.academico.fiuni.edu.py/infor/poiruinas/getPoi2.php?password=password";
			$.ajax({
				type : "POST",
				url : newUrl,
				async: true,
				success: function(datos){
		        	var dataJson = eval(datos);
		        	if(distanciaJesus < 5000){
		        		for(var i in dataJson){
		        			if(i < 34){
		        				var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        					createPOIGeometry(dataJson[i].ID, dataJson[i].NOMBRE, poi, dataJson[i].DESCRIPCION, dataJson[i].IMAGEN);
		    				}
		    			}
		    		} else {
		    			for(var i in dataJson){
		        			if(i >= 34){
		        				var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        					createPOIGeometry(dataJson[i].ID, dataJson[i].NOMBRE, poi, dataJson[i].DESCRIPCION, dataJson[i].IMAGEN);
		    				}
		    			}
		        	}
		    	},
				error: function (obj, error, objError){
		   			alert("Error");
				}
			});	
		} else {
			var trinidad_esp = ''
				+ '	Esta Misión Jesuítica fue fundada en 1.706 en el actual territorio Argentino, para luego trasladarse en 1712  al lugar '
				+ '	que ocupa actualmente.'
				+ '	Su fundador fue el sacerdote jesuita Juan de Anaya y el diseñador de la obra fue el hermano jesuita Juan Bautista '
				+ '	Primoli.';
			var jesus_esp = ''
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
				+ '	Las ruinas de estas misiones religiosas reflejan una forma de vida y de educación marcadas por un estilo singular. ';
			createPOIGeneric(1, "Jesus de Tavarangue", jesus, jesus_esp, "http://www.academico.fiuni.edu.py/infor/poiruinas/img/11.jpg");
			createPOIGeneric(2, "Santisima Trinidad", trinidad, trinidad_esp, "http://www.academico.fiuni.edu.py/infor/poiruinas/img/39.jpg");
		}
	});
});

// Metodo para crear los POIs dinamicamente utilizando metodos de arel
function createPOIGeometry(id, title, location, description, imagen)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(1);
	newPOI.setMaxDistance(50);
	newPOI.setID(id);
	newPOI.setTitle(title);
	newPOI.setLocation(location);
	newPOI.setThumbnail(imagen);
	newPOI.setIcon(imagen);
	newPOI.setVisibility(true,true,true);
	newPOI.onTouchStarted = function(){ 
		$.ClassyNotty({
			title : title,
			content : description,
			img : imagen,
			click : function() {
						arel.Media.speak(description);
					}
		}); 
	};
 
	arel.Scene.addObject(newPOI);
}

// Metodo para crear solo dos POIs y que establezca la ruta
function createPOIGeneric(id, title, location, description, imagen)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(0);
	newPOI.setMaxDistance(0);
	newPOI.setID(id);
	newPOI.setTitle(title);
	newPOI.setLocation(location);
	newPOI.setThumbnail(imagen);
	newPOI.setIcon(imagen);
	newPOI.setVisibility(true,true,true);
	newPOI.onTouchStarted = function(){ 
	    /*new PNotify({
	        title: title,
	        text: description,
	        icon: imagen,
	        hide: false,
	        confirm: {
	            confirm: true,
	            buttons: [{
	                text: 'Ver Mapa',
	                addClass: 'btn-primary',
	                click: function(notice) {
	                    arel.Navigation.routeToObjectOnMap(newPOI);
	                }
	            }, {
	                text: 'Escuchar',
	                click: function(notice) {
	                    arel.Media.speak(description);
	                }
	            }}]
	        },
	        buttons: {
	            closer: true,
	            sticker: true
	        },
	        history: {
	            history: false
	        }
	    });*/
	    new PNotify({
	        title: 'Regular Notice',
	        text: 'Check me out! I\'m a notice.'
	    });
	};
	arel.Scene.addObject(newPOI);
}