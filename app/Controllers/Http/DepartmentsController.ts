import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Departament from 'App/Models/Departament';

export default class DepartmentsController {
    // create
    public async store({request}:HttpContextContract){
        let body=request.body();
        const theDepartament=await Departament.create(body);
        return theDepartament;
    }
}