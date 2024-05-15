class UserController {
    async registration(req, res) {
        res.send('Server is working');
    }
    async login(req, res) {
        res.send('Server is working');
    }
    async check(req, res) {
        // res.send('Server is working');
        const {id} = req.query;
        res.json(id);
    }
}

module.exports = new UserController();
