const express = require('express');
const router = express.Router();
const multer = require('multer')();
const data = require('./index.json');

router.post('/', multer.none(), function (req, res, next) {
	console.log(req.query);
	const { customerId } = req.query;

	let ContactData = data.filter((c) => c.customerId == customerId);

	if (ContactData.length === 0) res.send({ status: 'FAIL' });
	res.send(ContactData[0].contacts);
});

module.exports = router;
