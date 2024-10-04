class LoginController {
  async render(req, res, next) {
    try {
      res.render("login.ejs");
    } catch (error) {
      next(error);
    }
  }
}

const loginController = new LoginController();

module.exports = { loginController };
