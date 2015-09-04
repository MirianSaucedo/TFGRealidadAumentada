arel.sceneReady(function()
{
	console.log("sceneReady");
	
	arel.Scene.setPickingSoundEnabled(true);
	//arel.Scene.shareScreenshot(true);
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	arel.Scene.getLocation(function(location){
		var jesus = new arel.LLA(-27.053866,-55.75255, 0);
		var distanciaJesus = arel.Util.getDistanceBetweenLocationsInMeter(location, jesus);
		var trinidad = new arel.LLA(-27.129306,-55.701333, 0);
		var distanciaTrinidad = arel.Util.getDistanceBetweenLocationsInMeter(location, trinidad);
		if(distanciaJesus < 2000 || distanciaTrinidad < 2000){
			var newUrl = "http://www.academico.fiuni.edu.py/infor/poiruinas/getPoi2.php?password=password";
			$.ajax({
				type : "POST",
				url : newUrl,
				async: true,
				success: function(datos){
		        	var dataJson = eval(datos);
		        	for(var i in dataJson){
		        		var ciudad = dataJson[i].CIUDAD;
		        		if(distanciaJesus < 2000 && ciudad.indexOf("jesus") != -1){
		        			var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        				createPOIGeometry(dataJson[i].ID, dataJson[i].NOME, poi, dataJson[i].DESCRICAO, dataJson[i].IMAGEN);
		    			} else {
		        			var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        				createPOIGeometry(dataJson[i].ID, dataJson[i].NOME, poi, dataJson[i].DESCRICAO, dataJson[i].IMAGEN);
		    			} 	
		        	}
		    	},
				error: function (obj, error, objError){
		   			alert("Error");
				}
			});	
		} else {
			var trinidad_por = ''
					+ '	Esta missão Jesuítica foi fundada em 1706 na Argentina, mas depois se translado em 1712 no prédio onde fica na atualidade.'
					+ '	O seu fundador foi o sacerdote jesuíta Juan de Anaya e o desdenhador da obra foi o irmão jesuíta Juan Bautista Primoli.';
			var jesus_por = ''
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
				+ '	As ruínas destas missões religiosas mostram uma forma de vida e educação marcadas por um estilo singular.';
			createPOIGeneric(1, "Jesus de Tavarangue", jesus, jesus_por, "http://www.academico.fiuni.edu.py/infor/poiruinas/img/11.jpg");
			createPOIGeneric(2, "Santisima Trinidad", trinidad, trinidad_por, "http://www.academico.fiuni.edu.py/infor/poiruinas/img/39.jpg");
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
		noty({
			layout: 'topRight',
			theme: 'relax',
			text: '<b>' + title + '</b></br>' + description,
		    killer: true,
		    closeWith: ['click'],
			buttons: [
				{addClass: 'btn btn-primary', text: 'Escutar', onClick: function() {
						arel.Media.speak(description);
					}
				},
				{addClass: 'btn btn-danger', text: 'Olhar mapa', onClick: function() {
						$.noty.closeAll() ;
						arel.Navigation.routeToObjectOnMap(newPOI);
					}
				},
				{addClass: 'btn', text: 'Fechar', onClick: function() {
						$.noty.closeAll() ;
					}
				}
			]
		});
	};
    arel.Scene.addObject(newPOI);
}