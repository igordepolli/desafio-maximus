const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const jwtConfig = require("../config/jwt");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido!' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, jwtConfig.secret);
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido!' });
    }
}