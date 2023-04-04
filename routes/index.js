var express = require('express');
var router = express.Router();
const mailService = require('../service/mail.service')
/* GET home page. */

router.post('/send', async function(req, res, next) {
  res.json(await mailService.sendActivationMail("stell_artem@mail.ru", `${process.env.API_URL}api/activate/`))
});

module.exports = router;
