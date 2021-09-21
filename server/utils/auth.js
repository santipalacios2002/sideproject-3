const jwt = require('jsonwebtoken');
require('dotenv').config('../../../.env')

const secret = process.env.JWT_SECRET;
const expiration = '6h';

module.exports = {
  authMiddleware: function ({ req }) { //({req, res, next})
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    
    if (!token) {
      //return res.status(400).json({ message: 'You have no token!' });
      return req;
    }
    
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
