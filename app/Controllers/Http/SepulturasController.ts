import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sepultura from 'App/Models/Sepultura';

export default class SepulturasController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theSepulture=await Sepultura.create(body)
        return theSepulture;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let sepulturas:Sepultura[]=await Sepultura.query().paginate(page, perPage)
        return sepulturas;
    }
    public async show({params}:HttpContextContract){
        return Sepultura.findOrFail(params.id)
    }
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const theSepulture: Sepultura = await Sepultura.findOrFail(params.id);
        theSepulture.name = body.name;
        theSepulture.duracion = body.duracion;
        theSepulture.direccion = body.direccion;
        return theSepulture.save();
    }
    public async destroy({params, response}: HttpContextContract){
        const theSepulture: Sepultura = await Sepultura.findOrFail(params.id);
        response.status(204);
        return theSepulture.delete()
    }
}
