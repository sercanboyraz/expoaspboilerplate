import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';
import AppConsts from '../../lib/appconst';
import Constants from 'expo-constants';
const { manifest } = Constants;

const qs = require('qs');
class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
    let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
    console.log("login:" + JSON.stringify(result))
    return result.data.result;
  }
}

export default new TokenAuthService();
