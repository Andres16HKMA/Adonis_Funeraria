import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City';

export default class CitiesController {
    // create
    public async store({request}:HttpContextContract){
        let body=request.body();
        const theDepartament=await City.create(body);
        return theDepartament;
    }

    // get
    public async index({request}: HttpContextContract){
        const page = request.input('page', 1);
        const perPage = request.input('perPage', 20);
        let departaments:City[]= await City.query().paginate(page, perPage)
        return departaments;
    }
    public async show({params}: HttpContextContract){
        return City.findOrFail(params.id);
    }

    // update
    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const theDepartament: City = await City.findOrFail(params.id);
        theDepartament.name = body.name;
        return await theDepartament.save();
    }

    // delete
    public async delete({ params, response }: HttpContextContract) {
        const theDepartament: City = await City.findOrFail(params.id);
        response.status(204);
        return await theDepartament.delete();
    }
}
