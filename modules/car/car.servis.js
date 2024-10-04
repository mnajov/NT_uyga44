const { generationId } = require("../../lib/generationId")
const { Repository } = require("../../lib/repository");
const {resolve}= require("path")


class CarServis{
    #dataBaza
    constructor(dataBaza){
        this.#dataBaza= dataBaza
    }

    async getData(){
        const data = await this.#dataBaza.read()
        return data
    }


    async setData(data){

        const oldData= await this.#dataBaza.read()

        const id = generationId()
        const newData = {id:id, ...data}
        oldData.push(newData)
        await this.#dataBaza.write(oldData)
        return newData
    }

}

const dataBaza = new Repository(resolve("database", "cars.json"))
const carServis= new CarServis(dataBaza)

module.exports= {carServis}