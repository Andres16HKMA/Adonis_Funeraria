import axios from 'axios'

const securityServiceUrl = 'http://localhost:8181/api/public/security';

export class SecurityService {
  public async login(email: string, password: string) {
    try {
      const response = await axios.post(`${securityServiceUrl}/login`, {
        email,
        password,
      });
      return response.data; // Devuelve el token u otros datos
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error; // Relanza el error para que el controlador lo maneje
    }
  }

  public async validateToken(token: string) {
    try {
      const response = await axios.post(`${securityServiceUrl}/validate`, {
        token,
      });
      return response.data; // Devuelve la validación
    } catch (error) {
      console.error('Error en la validación del token:', error);
      throw error;
    }
  }
  public async secondFactor(email: string, password: string, token: string) {
    try {
      const response = await axios.put(`${securityServiceUrl}/second-Factor`, {
        email,
        password,
        token,
      });
      return response.data; // Devuelve el mensaje del endpoint
    } catch (error) {
      console.error('Error en el segundo factor:', error);
      throw error; // Relanza el error para manejo adicional
    }
  } 
}
