function Language(l){
	this.language = l;
}

Language.prototype.getLanguage = function(){
	return this.language;
}

Language.prototype.setLanguage = function(l) {
	this.language = l;
}