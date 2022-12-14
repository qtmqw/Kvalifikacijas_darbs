const jwt =require('jsonwebtoken')
const ErrorResponse = require('../utils/errorResponse')

exports.verifyToken = (req, res, next) => {
	let accessToken = req.cookies.jwt;

	// if there is no token in the cookies, request is unauthorized
	if (!accessToken) {
		return res.status(403).json({
			error: "Unauthorized",
		});
	}

	let payload;
	try {
		// verify the token jwt.verify
		// throws an erro if token has expired or has an invalid signature
		payload = jwt.verify(accessToken, process.env.JWT_SECRET);
		req._id = payload._id;

		next();
	} catch (e) {
		// return req unauthorized error
		return res.status(403).json({
			error: "Unauthorized",
		});
	}
};

exports.isAdmin = (req, res, next) =>{
    if (req.user.role === 0){
        return next (new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();

}