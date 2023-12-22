const express = require('express');
const route = express.Router();
const {getBlogByNo} = require('./../controller/BlogController')


// Dashboard
route.get('/', (req, res, next) => {
    res.render('layouts-horizontal', { title: 'Dashboard Home', page_title: 'Home', layout: 'partials/layout-horizontal' })
    // res.render('index', { title: 'Dashboard' ,page_title:'Dashboard' });
})
// route.get('/index', (req, res, next) => {
//     res.render('index', { title: 'Dashboard',page_title:'Dashboard' });
// })


route.get('/blog/new', (req, res) => {
    res.render('new-blog', { title: 'New Blog', layout: 'partials/layout-horizontal'})
})

route.get('/blog/:id', async(req, res) => {
    const blog = getBlogByNo(req.params.id);
    res.render('blog-view', {title: 'Update/View Blog', layout: 'partials/layout-horizontal', out})
})


// Contacts
route.get('/contacts-list', (req, res, next) => {
    res.render('contacts-list', { title: 'Contacts'});
})
route.get('/contacts-profile', (req, res, next) => {
    res.render('contacts-profile', { title: 'Profile'});
})

// Auth Pages
route.get('/auth-login', (req, res, next) => {
    res.render('auth/auth-login', { title: 'Log In', layout: false })
})
route.get('/auth-register', (req, res, next) => {
    res.render('auth/auth-register', { title: 'Register', layout: false })
})
route.get('/auth-logout', (req, res, next) => {
    res.render('auth/auth-logout', { title: 'Logout', layout: false })
})
route.get('/auth-recoverpw', (req, res, next) => {
    res.render('auth/auth-recoverpw', { title: 'Recover Password', layout: false })
})
route.get('/auth-lock-screen', (req, res, next) => {
    res.render('auth-lock-screen', { title: 'Lock Screen', layout: false })
})
route.get('/auth-lock-screen', (req, res, next) => {
    res.render('auth-lock-screen', { title: 'Lock Screen', layout: false })
})
route.get('/auth-confirm-mail', (req, res, next) => {
    res.render('auth-confirm-mail', { title: 'Confirm Email', layout: false })
})
module.exports = route;