const User = require('../models/User');

class UserController {
    async store(req, res) {
        const {
            name,
            user,
            email
        } = await User.create(req.body);

        return res.json({
            name,
            user,
            email
        });
    }
}

module.exports = new UserController();