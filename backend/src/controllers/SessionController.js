const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwtConfig = require('../config/jwt');

class SessionController {
  async store(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error('User not found!');
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        throw new Error('Incorrect password!');
      }

      const { id } = user;
      return res.json({
        user: {
          id,
          username,
        },
        token: jwt.sign({ id }, jwtConfig.secret, {
          expiresIn: jwtConfig.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  }
}

module.exports = new SessionController();
