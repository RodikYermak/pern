const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {
        res.send('Server is working');
    }
    async login(req, res) {
        res.send('Server is working');
    }
    async check(req, res, next) {
        // res.send('Server is working');
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('Id is not defined'));
        }

        res.json(id);
    }
}

module.exports = new UserController();
