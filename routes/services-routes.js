const routes = require('express').Router()

routes.get('/consulting', (req, res) => {
    res.render('frontend/services/consulting', { layout: false });
})

routes.get('/network-security', (req, res)=> {
    res.render('frontend/services/network-security', { layout: false });
})

routes.get('/managed-services', (req, res)=> {
    res.render('frontend/services/managed-it-services', { layout: false });
})

routes.get('/network', (req, res) => {
    res.render('frontend/services/network', { layout: false });
})

routes.get('/cloud-services', (req, res) => {
    res.render('frontend/services/cloud-services', { layout: false })
})

routes.get('/request-quotation', (req,res) => {
    res.render('frontend/services/request-quote', { layout: false })
})

routes.get('/unified-communications', (req, res) => {
    res.render('frontend/services/unified-communications', { layout: false })
})

module.exports = routes;