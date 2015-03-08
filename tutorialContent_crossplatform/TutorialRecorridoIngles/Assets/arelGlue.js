arel.sceneReady(function()
{
	console.log("sceneReady");

	
//Variables para la Misión Jesuítica Guaraní - Jesús de Tavarangue
var Museum = new arel.LLA(-27.053866, -55.75255, 0);
var miradorar = new arel.LLA(-27.307033,-55.884433 , 0);
var miradorab = new arel.LLA(-27.057167, -55.751972, 0);
var plaza = new arel.LLA(-27.054516,-55.752533 , 0);
var fachada = new arel.LLA( -27.055733,-55.7526 , 0);
var hornacinasanpablo = new arel.LLA(-27.05575, -55.7526, 0);
var hornacinasanpedro = new arel.LLA(-27.055766,-55.75255, 0);
var pilarder = new arel.LLA(-27.055816,-55.752683, 0);
var pilarizq = new arel.LLA(-27.055866,-55.752566, 0);
var templo = new arel.LLA(-27.055883,-55.752633, 0);
var torreizq = new arel.LLA(-27.055806,-55.752722, 0);
var torreder = new arel.LLA(-27.055778,-55.752444, 0);
var pulpitoder = new arel.LLA(-27.056028,-55.752639, 0);
var pulpitoizq = new arel.LLA(-27.053278,-55.752556, 0);
var pilatesder = new arel.LLA(-27.056278,-55.752667, 0);
var altarmayor = new arel.LLA(-27.056306,-55.752611, 0);
var sacristiader = new arel.LLA(-27.056306,-55.752667, 0);
var sacristiaizq = new arel.LLA(-27.056306,-55.752556, 0);
var iglesiasecundaria = new arel.LLA(-27.056389,-55.752556, 0);
var fuenteagua = new arel.LLA(-27.056389,-55.752611, 0);
var corredorjere = new arel.LLA(-27.056361,-55.752889, 0);
var residenciapadres = new arel.LLA(-27.056417,-55.752861, 0);
var huertacomunitaria = new arel.LLA(-27.056583, -55.752889, 0);
var cementerio = new arel.LLA(-27.056167,-55.752306, 0);
var colegio = new arel.LLA(-27.056417,-55.753000, 0);
var comedorycocina = new arel.LLA(-27.056361,-55.753444, 0);
var almacenydespensa = new arel.LLA(-27.056361,-55.753778, 0);
var talleres = new arel.LLA(-27.056361,-55.753778, 0);
var claustros = new arel.LLA(-27.056056,-55.753750, 0);
var aulaespiritual = new arel.LLA(-27.056056,-55.753556, 0);
var galeriacasasder = new arel.LLA(-27.055611,-55.751528, 0);
var galeriacasasizq = new arel.LLA(-27.055500,-55.753306, 0);

      //Misión Jesuítica Guaraní – La Santísima Trinidad del Paraná

var plazamayor = new arel.LLA(-27.130833,-55.701583, 0);
var casaindigenasizq = new arel.LLA(-27.130500,-55.701583, 0);
var casaindigenasder = new arel.LLA(-27.130944,-55.701056, 0);
var templomayor = new arel.LLA(-27.131694,-55.701917, 0);
var atriotemplomayor = new arel.LLA(-27.131833,-55.701833, 0);
var pilassantiguacion = new arel.LLA(-27.131833,-55.701861, 0);
var pilabaustimal = new arel.LLA(-27.131917,-55.701750, 0);
var altaranimas = new arel.LLA(-27.132361,-55.701972, 0);
var pulpito = new arel.LLA(-27.132139,-55.701861, 0);
var linealapidas = new arel.LLA(-27.131750,-55.702278, 0);
var murolateral = new arel.LLA(-27.131917,-55.701972, 0);
var cripta = new arel.LLA(-27.132333,-55.701972, 0);
var sacristias = new arel.LLA(-27.132306,-55.702028, 0);
var frisoangeles = new arel.LLA(-27.132361,-55.702111, 0);
var portico = new arel.LLA(-27.132417,-55.701972, 0);
var claustro = new arel.LLA(-27.132083,-55.702139, 0);
var habitacionsacerdotes = new arel.LLA(-27.132333,-55.702306, 0);
var aulascolegio = new arel.LLA(-27.132333,-55.702528, 0);
var talleres = new arel.LLA(-27.132111,-55.702944, 0);
var torreatalaya = new arel.LLA(-27.131167,-55.702694, 0);
var temploprimitivo = new arel.LLA(-27.130944,-55.702722, 0);
var basamento = new arel.LLA(-27.131750,-55.701833, 0);
var zonaarquelogica = new arel.LLA(-27.131194,-55.703417, 0);
var huerta = new arel.LLA(-27.132611,-55.702333, 0);
var cementerio = new arel.LLA(-27.132333,-55.701556, 0);
var carcel = new arel.LLA(-27.131739,-55.702076, 0);
var tapetuja = new arel.LLA(-27.130250,-55.701472, 0);
var artesanias = new arel.LLA(-27.130139,-55.701000, 0);
var centroinformacion = new arel.LLA(-27.129306,-55.701333, 0);

	//arel.Scene.getObject("1").setLocation(Museum);
    //arel.Scene.getObject("1").setVisibility(true,false,true);
	//arel.Scene.getObject("1").setLLALimitsEnabled(true);

	arel.Scene.setLLAObjectRenderingLimits(3, 500);
	

	// Jesús de Tavarangue:
createPOIGeometry("2", "Gazebo", miradorar, "  ");
createPOIGeometry("3", "Gazebo", miradorab, "  ");
createPOIGeometry("4", "Square",plaza, "  ");
createPOIGeometry("5", "Frontage",fachada, "  ");
createPOIGeometry("6", "Nicho-San Pablo",hornacinasanpablo, "  ");
createPOIGeometry("7", "Nicho-San Pedro",hornacinasanpedro, "  ");
createPOIGeometry("8", "Pillar",pilarder, "  ");
createPOIGeometry("9", "Pillar",pilarizq, "  ");
createPOIGeometry("10", "Church",templo, "  ");
createPOIGeometry("11", "Tower",torreizq, "  ");
createPOIGeometry("12", "Tower",torreder, "  ");
createPOIGeometry("13", "Pulpit",pulpitoder, "  ");
createPOIGeometry("14", "Pulpit",pulpitoizq, "  ");
createPOIGeometry("15", "Pilates",pilatesder, "  ");
createPOIGeometry("16", "High Altar",altarmayor, "  ");
createPOIGeometry("17", "Sacristia",sacristiader, "  ");
createPOIGeometry("18", "Sacristia",sacristiaizq, "  ");
createPOIGeometry("19", "Secondary Church",iglesiasecundaria, "  ");
createPOIGeometry("20", "Source of Water",fuenteagua, "  ");
createPOIGeometry("21", "Corredor Jere",corredorjere, "  ");
createPOIGeometry("22", "Residence of Priests",residenciapadres, "  ");
createPOIGeometry("23", "Community Orchard",huertacomunitaria, "  ");
createPOIGeometry("24", "Cemetery",cementerio, "  ");
createPOIGeometry("26", "School",colegio, "  ");
createPOIGeometry("27", "Dining Room",comedorycocina, "  ");
createPOIGeometry("28", "Store",almacenydespensa, "  ");
createPOIGeometry("29", "Workshop",talleres, "  ");
createPOIGeometry("30", "Cloister",claustros, "  ");
createPOIGeometry("31", "Spiritual Room",aulaespiritual, "  ");
createPOIGeometry("32", "Houses Gallery",galeriacasasder, "  ");
createPOIGeometry("33", "Houses Gallery",galeriacasasizq, "  ");

createPOIGeometry("34", "Square",plazamayor, "  ");
createPOIGeometry("35", "Indian House",casaindigenasizq, "  ");
createPOIGeometry("36", "Indian House",casaindigenasder, "  ");
createPOIGeometry("37", "Church",templomayor, "  ");
createPOIGeometry("38", "Atrium of The Church",atriotemplomayor, "  ");
createPOIGeometry("39", "Pile of Santiguacion",pilassantiguacion, "  ");
createPOIGeometry("40", "Baptismal Font",pilabaustimal, "  ");
createPOIGeometry("41", "Altar of The Souls of Purgatory", altaranimas, "  ");
createPOIGeometry("42", "Pulpit",pulpito, "  ");
createPOIGeometry("43", "Lithic Museum",linealapidas, "  ");
createPOIGeometry("44", "Lateral Wall",murolateral, "  ");
createPOIGeometry("45", "Crypt",cripta, "  ");
createPOIGeometry("46", "Sacristies",sacristias, "  ");
createPOIGeometry("47", "Frieze of Musicians Angeles",frisoangeles, "  ");
createPOIGeometry("48", "Portico of The Sacristy",portico, "  ");
createPOIGeometry("49", "The Cloister",claustro, "  ");
createPOIGeometry("50", "Rooms of The Priests",habitacionsacerdotes, "  ");
createPOIGeometry("51", "Classrooms",aulascolegio, "  ");
createPOIGeometry("52", "Workshops",talleres, "  ");
createPOIGeometry("53", "Tower of Atalaya",torreatalaya, "  ");
createPOIGeometry("54", "Primitivo Temple",temploprimitivo, "  ");
createPOIGeometry("55", "Basament",basamento, "  ");
createPOIGeometry("56", "Archaeological Site",zonaarquelogica, "  ");
createPOIGeometry("57", "Orchard",huerta, "  ");
createPOIGeometry("58", "Cemetery",cementerio, "  ");
createPOIGeometry("59", "Jail",carcel, "  ");
createPOIGeometry("60", "Tape Tuja",tapetuja, "  ");
createPOIGeometry("61", "Crafts",artesanias, "  ");
createPOIGeometry("62", "Tourist Information Center",centroinformacion, "  ");
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
	newPOI.setVisibility(true, true, true);
	
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
						content : dataJson[i].DI,
						img : dataJson[i].I,
						click : function() {
									arel.Media.speak(dataJson[i].DI);
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