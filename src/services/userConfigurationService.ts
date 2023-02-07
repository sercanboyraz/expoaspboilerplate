import http from './httpService';

class userConfigurationService {
  public async getAll() {
    const result = await http.get('/DatamindUserConfiguration/GetAll');
    return result;
  }
}

export default new userConfigurationService();
