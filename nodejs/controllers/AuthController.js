const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Falied login',
    successRedirect: '/',
    successFlash: 'You are now logged in'
});

exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'You re now logged out');
    res.redirect('/');
}

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next(); //carry on! They are logged in
        return;
    }

    req.flash('error', 'Oops, you must be logged in to do that!');
    res.redirect('/login');
}