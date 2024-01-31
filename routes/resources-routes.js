const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.render('frontend/resources/index', {layout: false});
})

module.exports = routes;