arel.sceneReady(function()
{
	console.log("sceneReady");
	
	//var lizza = new arel.LLA(-27.03271, -55.45152, 0);
	//arel.Scene.getObject("1").setLocation(lizza);
    //arel.Scene.getObject("1").setVisibility(true,false,true);
	//arel.Scene.getObject("1").setLLALimitsEnabled(true);
	arel.Scene.setLLAObjectRenderingLimits(3,500 );
	
	var newUrl = "http://www.academico.fiuni.edu.py/infor/poiruinas/getPoi2.php";
	$.ajax({
		type : "POST",
		url : newUrl,
		async: true,
		success: function(datos){
        	var dataJson = eval(datos);
        	for(var i in dataJson){
	        	var poi = new arel.LLA(dataJson[i].LA,dataJson[i].LO, 0);
	        	createPOIGeometry(dataJson[i].ID, dataJson[i].NOMBRE, poi, "  ");
        	}
    	},
		error: function (obj, error, objError){
   		 alert("Error");
		}
	});
	
	
});

// Dynamically create arel POIs. You can of course also just define them in XML.
function createPOIGeometry(id, title, location, description)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(1);
	newPOI.setMaxDistance(800000);
	newPOI.setID(id);
	newPOI.setTitle(title);
	newPOI.setLocation(location);
	newPOI.setThumbnail("");
	newPOI.setIcon("");
	newPOI.setVisibility(true,true,true);
	
	var newUrl = "http://www.academico.fiuni.edu.py/infor/poiruinas/getPoi.php?id=" + id;
	newPOI.onTouchStarted = function(){ 
		$.ajax({
			type : "POST",
			url : newUrl,
			async: true,
			success: function(datos){
	        	var dataJson = eval(datos);
             
            	for(var i in dataJson){
            		$.ClassyNotty({
						title : title,
						content : dataJson[i].D,
						img : dataJson[i].I,
						click : function() {
									arel.Media.speak(dataJson[i].D);
								}
	      			}); 
            	}
             
        	},
       			error: function (obj, error, objError){
           		 alert("Error");
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