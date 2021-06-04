const User = require('../models/User');
class UserController {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async store(req, res) {
        const {
            name,
            userName,
            email,
            password,
        } = req.body;

        const user = await User.create({ name, userName, email, password });

        return res.json(user);
    }
}

module.exports = new UserController();