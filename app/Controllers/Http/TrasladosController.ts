import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Traslado from 'App/Models/Traslado';

export default class TrasladosController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theTraslade=await Traslado.create(body)
        return theTraslade;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let traslados:Traslado[]=await Traslado.query().paginate(page, perPage)
        return traslados;
    }
    public async show({params}:HttpContextContract){
        return Traslado.findOrFail(params.id)
    }
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const theTraslade: Traslado = await Traslado.findOrFail(params.id);
        theTraslade.origen = body.origen;
        theTraslade.destino = body.destino;
        theTraslade.placa = body.placa;
        return theTraslade.save();
    }
    public async destroy({params, response}: HttpContextContract){
        const theTraslade: Traslado = await Traslado.findOrFail(params.id);
        response.status(204);
        return theTraslade.delete()
    }
}
