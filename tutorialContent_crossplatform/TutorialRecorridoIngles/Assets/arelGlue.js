arel.sceneReady(function()
{
	console.log("sceneReady");
	/*var lizza = new arel.LLA(-27.03271, -55.45152, 0);
	arel.Scene.getObject("1").setLocation(lizza);
    arel.Scene.getObject("1").setVisibility(true,false,true);
	arel.Scene.getObject("1").setLLALimitsEnabled(true);*/
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	
	var newUrl = "http://www.academico.fiuni.edu.py/infor/poiruinas/getPoi2.php?password=password";
	$.ajax({
		type : "POST",
		url : newUrl,
		async: true,
		success: function(datos){
        	var dataJson = eval(datos);
        	for(var i in dataJson){
        		if(i<20){
	        		var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        		createPOIGeometry(dataJson[i].ID, dataJson[i].NAME, poi, dataJson[i].DESCRIPTION, dataJson[i].IMAGEN);
        		}
        	}
    	},
		error: function (obj, error, objError){
   		 alert("Error");
		}
	});	
});

// Dynamically create arel POIs. You can of course also just define them in XML.
function createPOIGeometry(id, title, location, description, imagen)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(1);
	newPOI.setMaxDistance(80000);
	newPOI.setID(id);
	newPOI.setTitle(title);
	newPOI.setLocation(location);
	newPOI.setThumbnail("");
	newPOI.setIcon("");
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
    
    
    var popup = new arel.Popup(
                               {
                               buttons:{},
                               description:description
                               });
    
    newPOI.setPopup(popup);
    
	arel.Scene.addObject(newPOI);
}