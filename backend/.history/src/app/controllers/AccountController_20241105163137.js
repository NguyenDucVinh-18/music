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
		const { username, password } = req.body;
		const account = new Account({ username, password });
		account
			.save()
			.then(() => res.status(200))
			.catch((err) => res.status(500).json(err));
	}
}

module.exports = new AccountController();
