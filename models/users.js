var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	zipcode: {type: Number, required: false},
	totalsaved: {type: Number, required: false},
	numcoupons: {type: Number, required: false},
	savedcoupons: {type: Array, required: false},
	checkoutcoupons: {type: Array, required: false}
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);  
};

module.exports = mongoose.model('User', userSchema);