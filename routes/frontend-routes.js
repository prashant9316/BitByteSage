const routes = require('express').Router()


routes.get('/', (req, res) => {
    res.render('frontend/index', { layout: false });
});

routes.get('/about-us', (req, res) => {
    res.render('frontend/about-us', { layout: false });
})

routes.get('/contact-us', (req, res) => {
    res.render('frontend/contact-us', { layout: false });
})

routes.get('/newsletter', (req, res) => {
    res.render('frontend/newsletter-subscribe', { layout: false });
})

routes.get('/privacy-policy', (req, res) => {
    res.render('frontend/privacy-policy', { layout: false });
});

routes.get('/support-center', (req, res) => {
    res.render('frontend/support-center', { layout: false });
})




module.exports = routes;