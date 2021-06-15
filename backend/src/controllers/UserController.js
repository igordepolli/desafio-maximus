const User = require('../models/User');

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  async store(req, res) {
    const {
      name,
      username,
      email,
      password,
    } = req.body;

    try {
      if (await User.findOne({ where: { username } }) !== null) {
        throw Error(`User ${username} already exists!`);
      }

      if (await User.findOne({ where: { email } }) !== null) {
        throw Error(`E-mail ${email} already exists!`);
      }

      const user = await User.create({
        name, username, email, password,
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new UserController();
