const { carServis } = require("./car.servis")

class CarController {
    #carServis
    constructor(carServis){
        this.#carServis=carServis
    
    }

   async getCars(req,res,next){
    const data = await this.#carServis.getData()

    res.render("car.ejs", {data:data})





   }
}

const carController= new CarController(carServis)
module.exports={carController}
