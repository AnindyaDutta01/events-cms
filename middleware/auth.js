function isAuthenticated(req, res, next) {
    if (req.session && req.session.admin) {
        return next();
    }

    // return res.status(401).json({ error: 'Unauthorized. Please log in.' });
    return res.redirect('/api/login?notify=' + encodeURIComponent('Unauthorized. Please log in!'));
}

export {
    isAuthenticated,
}