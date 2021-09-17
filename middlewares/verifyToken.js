const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, JWT_SECRET_KEY, function(err, decoded) {
    if (err) {
      return res.status(403).json({
        message: err.message
      });
    }
    
    req.user = decoded;
    return next();
  });

}