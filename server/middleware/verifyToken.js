import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
            if (err) {
               res.status(498).json({ message: 'Token is not valid' });
            }
            next();
        });
    } else {
        res.status(498).json({ message: 'Token is not valid' });
    }
};

export default verifyToken;

