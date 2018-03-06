let service = process.SUPERGO_SERVICE

if (!service) {
    const Service = require('./lib/service')
    service = new Service()
}

module.exports = service.resolveWebpackConfig()