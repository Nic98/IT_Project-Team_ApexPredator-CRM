const jwt = require('jsonwebtoken')

// Middleware for jwt token verification
module.exports = (req, res, next) => {
    try {

        // Get the token from Authorization header of HTTP request, and verify it
        const token = req.cookies.Authorization;
        // const token = req.headers.authorization.split(" ")[1];
        // If verification succeeds, populate req with decoded user information
        req.userData = jwt.verify(token, process.env.JWT_KEY);
        next();

    } catch (err) {
        return res.status(401).json({
            message: 'Authentication failed.'
        });
    }
}