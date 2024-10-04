const {myJwt}= require("../../lib/jwt")
const { CustomError } = require("../../lib/customError")
const { userService } = require("../user/user.service")

class MW{
    #userServis
    constructor(userServis){
        this.#userServis= userServis
    }
  async  token(req,res, next){
   try {


    if(!req.cookies.token){
        throw new CustomError(401, "sizda token yoq")
        
    }
    const {id:userid}  = myJwt.verify(req.cookies.token)
    const idBormi= await this.#userServis.getId(userid)
    if(idBormi.status== 404){
        throw new CustomError(404, "tokeningiz orqali id topilmadi")
        
    }

    next()


    
   } catch (error) {
    next(error)
   }





    }
}


const mw = new MW(userService);


module.exports= {mw}
