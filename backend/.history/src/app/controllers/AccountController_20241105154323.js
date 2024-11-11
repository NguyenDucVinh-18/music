const Account = require('../models/Account');
const { singleMongooseToObject } = require('../../util/mongoose');

class AccountController {
	//[GET] find account by id
	getAccount(req, res, next) {
		Account.findOne({ username: req.params.username })
			.then((account) => res.send(singleMongooseToObject(account)))
			.catch((err) => next(err));
	}

	createAccount(req, res, next) {
		console.log(req.params.username, req.params.password);
	}
}

module.exports = new AccountController();
