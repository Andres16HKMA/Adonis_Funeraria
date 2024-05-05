import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cremacion from 'App/Models/Cremacion';

export default class CremacionsController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theCremation=await Cremacion.create(body)
        return theCremation;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let cremation:Cremacion[]=await Cremacion.query().paginate(page, perPage)
        return cremation;
    }
    public async show({params}:HttpContextContract){
        return Cremacion.findOrFail(params.id)
    }
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const theCremation: Cremacion = await Cremacion.findOrFail(params.id);
        theCremation.name = body.name;
        theCremation.duracion = body.duracion;
        theCremation.asistentes = body.asistentes;
        return theCremation.save();
    }
    public async destroy({params, response}: HttpContextContract){
        const theCremation: Cremacion = await Cremacion.findOrFail(params.id);
        response.status(204);
        return theCremation.delete()
    }
}
