import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Service from "App/Models/Service";

export default class ServicesController {
    // create
 public async store({request}:HttpContextContract){
    let body=request.body();
    const theService=await Service.create(body);
    return theService;
}
// get
public async index({request}: HttpContextContract){
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 20);
    let services:Service[]= await Service.query().paginate(page, perPage)
    return services;
}
public async show({params}: HttpContextContract){
    return Service.findOrFail(params.id);
}

// update
public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const theService: Service = await Service.findOrFail(params.id);
    theService.tipo = body.valor;
    return await theService.save();
}

// delete
public async delete({ params, response }: HttpContextContract) {
    const theservice: Service = await Service.findOrFail(params.id);
    response.status(204);
    return await theservice.delete();
}
}
