import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { SecurityService } from 'App/Service/SecurityService';

export default class AuthController {
  private securityService: SecurityService;

  constructor() {
    this.securityService = new SecurityService();
  }

  public async login({ request, response }: HttpContextContract) {
    const { email, password } = request.body();

    try {
      const result = await this.securityService.login(email, password);
      return response.ok({ token: result });
    } catch (error) {
      return response.status(401).send({ error: 'Autenticación fallida' });
    }
  }
  public async secondFactor({ request, response }: HttpContextContract) {
    const { email, password, token } = request.body();

    try {
      const result = await this.securityService.secondFactor(email, password, token);
      return response.ok({ token: result });
    } catch (error) {
      return response.status(401).send({ error: 'Error de autenticación de segundo factor' });
    }
  }
}
