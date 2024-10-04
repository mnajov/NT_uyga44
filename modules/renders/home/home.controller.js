const { CustomError } = require("../../../lib/customError");
const { userService } = require("../../user/user.service");

class HomeController {
  #userService;
  constructor(userService) {
    this.#userService = userService;
  }

  async render(req, res, next) {
    try {
      
      // if(!req.cookies.token){
      // throw new CustomError(401, "sizdin tokeniniz yoq")
      
      // }
      
      const users = await this.#userService.getAll();

      res.render("index.ejs", users);
    } catch (error) {
      next(error);
    }
  }
}

const homeController = new HomeController(userService);

module.exports = { homeController };
