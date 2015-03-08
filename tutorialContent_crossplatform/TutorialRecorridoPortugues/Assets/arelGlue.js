//PORTUGUES
arel.sceneReady(function()
{
	console.log("sceneReady");

	//Variables para la Misión Jesuítica Guaraní - Jesús de Tavarangue
	var Museo = new arel.LLA(-27.053866, -55.75255, 0);
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
	var canteraitakuare = new arel.LLA(0, 0, 0);
	var colegio = new arel.LLA(-27.056417,-55.753000, 0);
	var comedorycocina = new arel.LLA(-27.056361,-55.753444, 0);
	var almacenydespensa = new arel.LLA(-27.056361,-55.753778, 0);
	var talleres = new arel.LLA(-27.056361,-55.753778, 0);
	var claustros = new arel.LLA(-27.056056,-55.753750, 0);
	var aulaespiritual = new arel.LLA(-27.056056,-55.753556, 0);
	var galeriacasasder = new arel.LLA(-27.055611,-55.751528, 0);
	var galeriacasasizq = new arel.LLA(-27.055500,-55.753306, 0);
	
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

	
	arel.Scene.getObject("1").setLocation(Museo);
    arel.Scene.getObject("1").setVisibility(true,false,true);
	arel.Scene.getObject("1").setLLALimitsEnabled(true);

	
	arel.Scene.setLLAObjectRenderingLimits(80, 2500);
	
	createPOIGeometry("2", "Mirador", miradorar, "  ");
	createPOIGeometry("3", "Mirador", miradorab, "  ");
	createPOIGeometry("4", "Pra\00E7a",plaza, "  ");
	createPOIGeometry("5", "Fachada",fachada, "  ");
	createPOIGeometry("6", "Hornacina-S\00E3o Pablo",hornacinasanpablo, "  ");
	createPOIGeometry("7", "Hornacina-S\00E3o Pedro",hornacinasanpedro, "  ");
	createPOIGeometry("8", "Pilar",pilarder, "  ");
	createPOIGeometry("9", "Pilar",pilarizq, "  ");
	createPOIGeometry("10", "Templo",templo, "  ");
	createPOIGeometry("11", "Torre",torreizq, "  ");
	createPOIGeometry("12", "Torre",torreder, "  ");
	createPOIGeometry("13", "Pulpito",pulpitoder, "  ");
	createPOIGeometry("14", "Pulpito",pulpitoizq, "  ");
	createPOIGeometry("15", "Pilates",pilatesder, "  ");
	createPOIGeometry("16", "Altar Maior",altarmayor, "  ");
	createPOIGeometry("17", "Sacrist\u00eda",sacristiader, "  ");
	createPOIGeometry("18", "Sacrist\u00eda",sacristiaizq, "  ");
	createPOIGeometry("19", "Igreja Secondaria ou Prebistero",iglesiasecundaria, "  ");
	createPOIGeometry("20", "Fonte de Agua",fuenteagua, "  ");
	createPOIGeometry("21", "Corredor Jere",corredorjere, "  ");
	createPOIGeometry("22", "Residencia dos Pais",residenciapadres, "  ");
	createPOIGeometry("23", "Huerta Comunitaria",huertacomunitaria, "  ");
	createPOIGeometry("24", "Cementerio",cementerio, "  ");
	createPOIGeometry("25", "Cantera de Itakuare",canteraitakuare, "  ");
	createPOIGeometry("26", "Colegio",colegio, "  ");
	createPOIGeometry("27", "Comedor e Cocina",comedorycocina, "  ");
	createPOIGeometry("28", "Almac\u00e9n",almacenydespensa, "  ");
	createPOIGeometry("29", "Taleres",talleres, "  ");
	createPOIGeometry("30", "Claustros",claustros, "  ");
	createPOIGeometry("31", "Aula Espiritual",aulaespiritual, "  ");
	createPOIGeometry("32", "Galer\u00ed a de Casas",galeriacasasder, "  ");
	createPOIGeometry("33", "Galer\u00ed a de Casas",galeriacasasizq, "  ");
	
	createPOIGeometry("34", "Pra\00E7a Maior",plazamayor, "  ");
	createPOIGeometry("35", "Casa dos Ind\u00edgenas",casaindigenasizq, "  ");
	createPOIGeometry("36", "Casa dos Ind\u00edgenas",casaindigenasder, "  ");
	createPOIGeometry("37", "Templo Maior",templomayor, "  ");
	createPOIGeometry("38", "Atrio do Templo Maior",atriotemplomayor, "  ");
	createPOIGeometry("39", "Pilas de Santiguaci\u00f3n",pilassantiguacion, "  ");
	createPOIGeometry("40", "Pila Bautismal",pilabaustimal, "  ");
	createPOIGeometry("41", "Altar das \u00c1nimas do Purgatorio", altaranimas, "  ");
	createPOIGeometry("42", "P\u00falpito",pulpito, "  ");
	createPOIGeometry("43", "Museo L\u00edtico",linealapidas, "  ");
	createPOIGeometry("44", "Muro Lateral",murolateral, "  ");
	createPOIGeometry("45", "Cripta",cripta, "  ");
	createPOIGeometry("46", "Sacrist\u00edas",sacristias, "  ");
	createPOIGeometry("47", "Friso dos Ángeles Músicos",frisoangeles, "  ");
	createPOIGeometry("48", "Portal das Sacrist\u00edas",portico, "  ");
	createPOIGeometry("49", "Claustro",claustro, "  ");
	createPOIGeometry("50", "Habita\00E7\00E3o dos Sacerdotes",habitacionsacerdotes, "  ");
	createPOIGeometry("51", "Aulas do Colegio",aulascolegio, "  ");
	createPOIGeometry("52", "Talleres",talleres, "  ");
	createPOIGeometry("53", "Torre de Atalaya",torreatalaya, "  ");
	createPOIGeometry("54", "Templo Primitivo",temploprimitivo, "  ");
	createPOIGeometry("55", "Basamento-Antigo Pilar de Pedra",basamento, "  ");
	createPOIGeometry("56", "Zona Arqueol\u00f3gica",zonaarquelogica, "  ");
	createPOIGeometry("57", "Huerta",huerta, "  ");
	createPOIGeometry("58", "Cementerio",cementerio, "  ");
	createPOIGeometry("59", "C\u00e1rcel",carcel, "  ");
	createPOIGeometry("60", "Tape Tuja",tapetuja, "  ");
	createPOIGeometry("61", "Artesan\u00edas",artesanias, "  ");
	createPOIGeometry("62", "Centro de Informa\00E7\00E3oo Tur\u00edstica",centroinformacion, "  ");
});

// Dynamically create arel POIs. You can of course also just define them in XML.
function createPOIGeometry(id, title, location, description)
{
	var newPOI = new arel.Object.POI();
	newPOI.setMinDistance(1);
	newPOI.setMaxDistance(80000);
	newPOI.setID(id);
	newPOI.setTitle(title);
	newPOI.setLocation(location);
	newPOI.setThumbnail("");
	newPOI.setIcon("");
	newPOI.setVisibility(true,false,true);
	
	var newUrl = "http://192.168.43.60:80/xampp/getPoi.php?id=" + id;
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
						content : dataJson[i].DP,
						img : dataJson[i].I,
						click : function() {
									arel.Media.speak(dataJson[i].DP);
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