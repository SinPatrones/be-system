const store = require('../../../store/prisma');
const ctrl = require('./controller');

module.exports = ctrl(store);
