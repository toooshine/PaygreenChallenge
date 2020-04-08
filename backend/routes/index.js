var express = require('express');
var router = express.Router();
const transactionsModel = require('../models/transactions');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/information', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	var newTransaction = new transactionsModel({
		cardtype: req.body.cardtype,
		amount: req.body.amount,
		idPsp: req.body.idPsp,
		idPaygreen: req.body.idPaygreen,
		paymentMode: req.body.paymentMode,
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		href: req.body.href,
		cardNumber: null,
		cryptogramCard: null,
		expiredMonth: null,
		expiredYear: null
	});

	newTransaction.save(function(error, transactions) {
		if (!error) {
			console.log('transaction', transactions);
			res.json({ result: true, transactions });
		} else {
			console.log(error);
			res.json({ result: false, error });
		}
	});
});

router.post('/transaction', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	console.log('coucou');
	transactionsModel
		.updateMany(
			{ idPsp: req.body.idPsp },
			{
				idPsp: req.body.idPsp,
				cardNumber: req.body.cardNumber,
				cryptogramCard: req.body.cryptogramCard,
				expiredMonth: req.body.expiredMonth,
				expiredYear: req.body.expiredYear
			}
		)
		.exec((err, response) => {
			if (err) {
				console.log({ status: 500, message: 'Internal Server Error', data: err });
			} else {
				res.json({ result: true });
				console.log({ status: 200, message: 'Notification Updated Successfully.' });
			}
		});
});

router.get('/allTransactions', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	console.log('ok');
	transactionsModel.find(function(error, allTransactions) {
		res.json({ result: true, allTransactions });
	});
});

router.get('/summarypayment', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	console.log('couocu');
	transactionsModel.findOne(
		{
			idPsp: req.query.idPsp
		},
		(err, customer) => {
			console.log('customer', customer);
			res.json({ result: true, isUserExist: true, customer });
		}
	);
});

module.exports = router;
