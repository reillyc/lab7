exports.prefdisplay = function(req, res) { 
	res.render('preferences',)
}
exports.addloyalty = function(req, res) { 
	res.render('addcard',)//'sprouts','vons',)
}
exports.returntosignin = function(req, res) { 
	res.render('signout',)//'sprouts','vons',)
}


