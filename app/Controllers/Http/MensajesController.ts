import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mensaje from 'App/Models/Mensaje';

export default class MensajesController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theMessage=await Mensaje.create(body)
        return theMessage;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let message:Mensaje[]=await Mensaje.query().paginate(page, perPage)
        return message;
    }
    public async show({params}:HttpContextContract){
        return Mensaje.findOrFail(params.id)
    }
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const theMessage: Mensaje = await Mensaje.findOrFail(params.id);
        theMessage.remitente = body.remitente;
        theMessage.destinatario = body.destinatario;
        theMessage.contenido = body.contenido;
        theMessage.estado = body.estado;
        return theMessage.save();
    }
    public async destroy({params, response}: HttpContextContract){
        const theMessage: Mensaje = await Mensaje.findOrFail(params.id);
        response.status(204);
        return theMessage.delete()
    }
}
