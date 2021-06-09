const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwtConfig = require('../config/jwt');

class SessionController {
  async store(req, res) {
    const [, hash] = req.headers.authorization.split(' ');
    const [userName, password] = Buffer.from(hash, 'base64')
      .toString()
      .split(':');

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado!' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({ message: 'Senha incorreta!' });
    }

    const { id } = user;
    return res.json({
      user: {
        id,
        userName,
      },
      token: jwt.sign({ id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
