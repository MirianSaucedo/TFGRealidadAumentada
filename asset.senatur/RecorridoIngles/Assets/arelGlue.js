arel.sceneReady(function()
{
	console.log("sceneReady");
	arel.Scene.setTrackingConfiguration(arel.Tracking.GPS);
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	arel.Scene.setPickingSoundEnabled(true);
	//arel.Scene.shareScreenshot(true);
	
	arel.Scene.getLocation(function(location){
		var jesus = new arel.LLA(-27.053866,-55.75255, 0);
		var distanciaJesus = arel.Util.getDistanceBetweenLocationsInMeter(location, jesus);
		var trinidad = new arel.LLA(-27.129306,-55.701333, 0);
		var distanciaTrinidad = arel.Util.getDistanceBetweenLocationsInMeter(location, trinidad);
		var jesus_ing = ''
				+ '	The Ruins of Jesús from Tavarangue is one of the reductions that is still preserved in the tows founded '
				+ '	by Jesuit Missionaries in their task of colonizing South America in the century XVII. It is located in '
				+ '	the department of Itapúa - Paraguay, in the city of Jesus.'
				+ '	It was founded in 1685, along the River Monday by the Jesuit Geronimo Delfin, although the settlement '
				+ '	had moved several time for the Brazilian hostility that attacked and carried as slaves, to arrive as '
				+ '	today is at 42.6 kilometers from Encarnación City. It has got as 3000 hectares to 1750.'
				+ ''
				+ '	In this mission they started to build one of the biggest church of the time, that has stayed unfinished '
				+ '	for the expulsion of the Jesuits in 1768 for Carlos III from Spain.'
				+ '	'
				+ '	The Ruins of these Religious Missions reflect a way of life and education characterized for a singular style.';
		var trinidad_ing = ''
				+ '	This mission was founded in 1706 in the present Argentine territory, and then move in 1712 to the present '
				+ '	place.'
				+ '	Its founder was the Jesuit priest Juan of Anaya and the designer of the work was the Jesuit Brother '
				+ '	Juan Bautista Primoli.';
			
		if(distanciaJesus < 1000){
			var newUrl = "http://168.90.176.30/infotour/getPois.php?password=password";
			$.ajax({
				type : "POST",
				url : newUrl,
				async: true,
				success: function(datos){
		        	var dataJson = eval(datos);
		        	var j = -1;
		        	for(var i in dataJson){
		        		var ciudad = dataJson[i].CIUDAD;
		        		if(ciudad.indexOf("Jesus") != -1){
		        			var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        				createPOIGeometry(++j, dataJson[i].NAME, poi, dataJson[i].DESCRIPTION, dataJson[i].IMAGEN);
		    			}  	
		        	}
		        	createPOIGeneric(++j, "Santisima Trinidad", trinidad, trinidad_ing, "http://168.90.176.30/infotour/img/39.jpg");
		    	},
				error: function (obj, error, objError){
		   			alert("Error: Please, verify your internet conection");
				}
			});	
		} else if(distanciaTrinidad < 1000){
			var newUrl = "http://168.90.176.30/infotour/getPois.php?password=password";
			$.ajax({
				type : "POST",
				url : newUrl,
				async: true,
				success: function(datos){
		        	var dataJson = eval(datos);
		        	var j = -1;
		        	for(var i in dataJson){
		        		var ciudad = dataJson[i].CIUDAD;
		        		if(ciudad.indexOf("Trinidad") != -1){
		        			var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        				createPOIGeometry(++j, dataJson[i].NAME, poi, dataJson[i].DESCRIPTION, dataJson[i].IMAGEN);
		    			}  	
		        	}
		        	createPOIGeneric(++j, "Jesus de Tavarangue", jesus, jesus_ing, "http://168.90.176.30/infotour/img/11.jpg");
				},
				error: function (obj, error, objError){
		   			alert("Error: Please, verify your internet conection");
				}
			});	
		} else {
			createPOIGeneric(1, "Jesus de Tavarangue", jesus, jesus_ing, "http://168.90.176.30/infotour/img/11.jpg");
			createPOIGeneric(2, "Santisima Trinidad", trinidad, trinidad_ing, "http://168.90.176.30/infotour/img/39.jpg");
		}
	});
});

//  Metodo para crear los POIs dinamicamente utilizando metodos de arel
function createPOIGeometry(id, title, location, description, imagen)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(1);
	newPOI.setMaxDistance(150);
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
		noty({
			layout: 'topRight',
			theme: 'relax',
			text: '<b>' + title + '</b></br>' + description,
		    killer: true,
		    closeWith: ['click'],
			buttons: [
				{addClass: 'btn btn-primary', text: 'Hear', onClick: function() {
						arel.Media.speak(description);
					}
				},
				{addClass: 'btn btn-danger', text: 'View Map', onClick: function() {
						$.noty.closeAll();
						arel.Navigation.routeToObjectOnMap(newPOI);
					}
				},
				{addClass: 'btn', text: 'Close', onClick: function() {
						$.noty.closeAll();
					}
				}
			]
		}); 
	}; 
	arel.Scene.addObject(newPOI);
}