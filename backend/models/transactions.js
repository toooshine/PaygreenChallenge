const mongoose = require('mongoose');

var transactionsSchema = mongoose.Schema({
	idPsp: Number,
	cardNumber: String,
	cryptogramCard: String,
	expiredMonth: Number,
	expiredYear: Number,
	cardtype: String,
	amount: Number,
	paymentMode: String,
	email: String,
	firstName: String,
	lastName: String,
	idPaygreen: String,
	href: String,
	cardNumber: String
});

var transactionsModel = mongoose.model('transactions', transactionsSchema);

module.exports = transactionsModel;
