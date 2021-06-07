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

        try {
            const user = await User.create({ name, userName, email, password });
            user.password = undefined;
            return res.json(user);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

module.exports = new UserController();