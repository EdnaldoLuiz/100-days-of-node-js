const bodyParser = require('body-parser');

exports.jsonParser = bodyParser.json();
exports.urlencodedParser = bodyParser.urlencoded({ extended: true });