import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';

const qs = require('qs');
class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
    console.log("asdasdasda: " + JSON.stringify(http));
    let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
    console.log("login:" + JSON.stringify(result))
    return result.data.result;
  }
}

export default new TokenAuthService();
