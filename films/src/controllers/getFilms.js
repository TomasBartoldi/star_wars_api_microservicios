const Film = require('../data');
const { response } = require('../utils');

module.exports = async (_req, res) => {
   const films = await Film.list();
   response(res ,200, films);
}