if (process.env.NODE_ENV === 'production') {
  //We are in prod environment
  module.exports = require('./prod');
} else {
  //We are in dev environment
  module.exports = require('./dev');
}
